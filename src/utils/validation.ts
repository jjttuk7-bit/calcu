/**
 * Form input validation utilities.
 */

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

/**
 * Validates whether a value is a positive number.
 */
export function validatePositiveNumber(value: number, fieldName = '금액'): ValidationResult {
  if (value < 0) {
    return {
      isValid: false,
      message: `${fieldName}은(는) 0보다 크거나 같아야 합니다.`
    };
  }
  return { isValid: true };
}

/**
 * Validates margins (e.g. sale cannot be less than purchase for standard profits, though it can be negative)
 */
export function validateSaleAndPurchase(purchase: number, sale: number): ValidationResult {
  if (purchase < 0 || sale < 0) {
    return {
      isValid: false,
      message: '매입가와 판매가는 0보다 크거나 같아야 합니다.'
    };
  }
  return { isValid: true };
}
