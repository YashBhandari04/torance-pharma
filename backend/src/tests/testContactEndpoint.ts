import { sendContactEmail } from '../services/emailService.js';
import { contactZodSchema } from '../middleware/validateMiddleware.js';

async function runContactTests() {
  console.log('=== RUNNING AUTOMATED CONTACT US FEATURE TESTS ===\n');

  // Test 1: Validation Test - Valid Request Body
  const validBody = {
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Delivery Inquiry',
    message: 'I need help regarding product delivery options in my region.'
  };

  const parseResult = contactZodSchema.safeParse(validBody);
  console.log('Test 1 (Valid Zod Schema Parsing):', parseResult.success ? '✅ PASSED' : '❌ FAILED');

  // Test 2: Validation Test - Invalid Email
  const invalidEmailBody = {
    name: 'John Doe',
    email: 'not-an-email',
    subject: 'Delivery Inquiry',
    message: 'Hello message'
  };

  const invalidEmailResult = contactZodSchema.safeParse(invalidEmailBody);
  console.log('Test 2 (Invalid Email Rejection):', !invalidEmailResult.success ? '✅ PASSED' : '❌ FAILED');

  // Test 3: Validation Test - Missing Subject
  const missingSubjectBody = {
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello message'
  };

  const missingSubjectResult = contactZodSchema.safeParse(missingSubjectBody);
  console.log('Test 3 (Missing Subject Rejection):', !missingSubjectResult.success ? '✅ PASSED' : '❌ FAILED');

  // Test 4: Nodemailer Service Structure Verification
  console.log('Test 4 (Email Service Functionality Exists):', typeof sendContactEmail === 'function' ? '✅ PASSED' : '❌ FAILED');

  console.log('\n=== ALL AUTOMATED CONTACT TESTS COMPLETED ===');
  process.exit(0);
}

runContactTests().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
