// Get the OTP input and button elements
const otpInput = document.querySelector('.otp-input');
const otpButton = document.querySelector('.otp-button');
const resendOtpButton = document.querySelector('#resendOtp');

// Function to generate OTP
function generateOTP() {
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp;
}

// Function to send OTP
function sendOTP(otp) {
    // Here you would integrate a third-party API or service to send the OTP
    console.log(`OTP sent: ${otp}`);
}

// Function to verify OTP
function verifyOTP(otp) {
    // Here you would integrate a third-party API or service to verify the OTP
    console.log(`OTP verified: ${otp}`);
}

// Generate and send OTP when the page loads
const otp = generateOTP();
sendOTP(otp);

// Add event listener to OTP button
otpButton.addEventListener('click', (e) => {
    e.preventDefault();
    const userOtp = otpInput.value;

    // Verify OTP
    if (userOtp === otp.toString()) {
        verifyOTP(otp);
        console.log('OTP is correct!');
        // Redirect to the next page
        window.location.href = 'pass.html';
    } else {
        console.log('Invalid OTP!');
    }
});

// Add event listener to resend OTP button
resendOtpButton.addEventListener('click', (e) => {
    e.preventDefault();
    const newOtp = generateOTP();
    sendOTP(newOtp);
    console.log(`New OTP sent: ${newOtp}`);
  });