import { z } from "zod";

// ---- File constraints (adjust as needed) ----
export const MAX_RECEIPT_BYTES = 10 * 1024 * 1024; // 10MB
export const ALLOWED_MIME = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
];

// Normalize empty strings to undefined
const emptyToUndef = z.literal("").transform(() => undefined);

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  country: z.string().min(2, "Country is required").max(100),
  phoneNumber: z
    .string()
    .regex(/^[\d+\-\s()]{6,30}$/, "Invalid phone number")
    .optional()
    .or(emptyToUndef),
  isIEEEMember: z.boolean().default(false),
  ieeeNumber: z
    .string()
    .min(5, "IEEE number too short")
    .max(30)
    .optional()
    .or(emptyToUndef),
  needsAccommodation: z.boolean().default(false),
  includesGalaDinner: z.boolean().default(false),
  includesTrip: z.boolean().default(false),
  isStudent: z.boolean().default(false),

  // Validate receipt by metadata (the route will pass {name,size,type})
  receipt: z
    .object({
      name: z.string(),
      size: z.number().max(MAX_RECEIPT_BYTES, "File too large"),
      type: z
        .string()
        .refine((t) => ALLOWED_MIME.includes(t), "Unsupported file type"),
    })
    .nullable()
    .optional(),
});

export const adminApproveSchema = z.object({
  userId: z.string().cuid(),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type AdminApproveInput = z.infer<typeof adminApproveSchema>;

/**
 * Coerce raw FormData entries into the shape registerSchema expects.
 * Converts booleans ("true"/"false") and empty strings to undefined.
 */
export function parseRegisterFormData(form: FormData) {
  const toBool = (v: FormDataEntryValue | null) =>
    typeof v === "string" ? v === "true" : false;

  const receipt = (form.get("receipt") as File | null) || null;

  const dto = {
    name: form.get("name"),
    email: form.get("email"),
    country: form.get("country"),
    phoneNumber: form.get("phoneNumber") ?? undefined,
    isIEEEMember: toBool(form.get("isIEEEMember")),
    ieeeNumber: form.get("ieeeNumber") ?? undefined,
    needsAccommodation: toBool(form.get("needsAccommodation")),
    includesGalaDinner: toBool(form.get("includesGalaDinner")),
    includesTrip: toBool(form.get("includesTrip")),
    isStudent: toBool(form.get("isStudent")),
    receipt: receipt
      ? { name: receipt.name, size: receipt.size, type: receipt.type }
      : null,
  };

  return { dto, receipt };
}
