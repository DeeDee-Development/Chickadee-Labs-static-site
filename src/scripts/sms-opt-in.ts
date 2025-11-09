/**
 * SMS Opt-In Form - Phone validation and form handling
 */

/**
 * Country data with names
 */
interface CountryData {
  code: string;
  name: string;
  flag: string;
}

const COUNTRIES: CountryData[] = [
  { code: '+1', name: 'United States', flag: '🇺🇸' },
  { code: '+7', name: 'Russia', flag: '🇷🇺' },
  { code: '+20', name: 'Egypt', flag: '🇪🇬' },
  { code: '+27', name: 'South Africa', flag: '🇿🇦' },
  { code: '+30', name: 'Greece', flag: '🇬🇷' },
  { code: '+31', name: 'Netherlands', flag: '🇳🇱' },
  { code: '+32', name: 'Belgium', flag: '🇧🇪' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
  { code: '+34', name: 'Spain', flag: '🇪🇸' },
  { code: '+36', name: 'Hungary', flag: '🇭🇺' },
  { code: '+39', name: 'Italy', flag: '🇮🇹' },
  { code: '+40', name: 'Romania', flag: '🇷🇴' },
  { code: '+41', name: 'Switzerland', flag: '🇨🇭' },
  { code: '+43', name: 'Austria', flag: '🇦🇹' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+45', name: 'Denmark', flag: '🇩🇰' },
  { code: '+46', name: 'Sweden', flag: '🇸🇪' },
  { code: '+47', name: 'Norway', flag: '🇳🇴' },
  { code: '+48', name: 'Poland', flag: '🇵🇱' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+51', name: 'Peru', flag: '🇵🇪' },
  { code: '+52', name: 'Mexico', flag: '🇲🇽' },
  { code: '+53', name: 'Cuba', flag: '🇨🇺' },
  { code: '+54', name: 'Argentina', flag: '🇦🇷' },
  { code: '+55', name: 'Brazil', flag: '🇧🇷' },
  { code: '+56', name: 'Chile', flag: '🇨🇱' },
  { code: '+57', name: 'Colombia', flag: '🇨🇴' },
  { code: '+58', name: 'Venezuela', flag: '🇻🇪' },
  { code: '+60', name: 'Malaysia', flag: '🇲🇾' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+62', name: 'Indonesia', flag: '🇮🇩' },
  { code: '+63', name: 'Philippines', flag: '🇵🇭' },
  { code: '+64', name: 'New Zealand', flag: '🇳🇿' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬' },
  { code: '+66', name: 'Thailand', flag: '🇹🇭' },
  { code: '+81', name: 'Japan', flag: '🇯🇵' },
  { code: '+82', name: 'South Korea', flag: '🇰🇷' },
  { code: '+84', name: 'Vietnam', flag: '🇻🇳' },
  { code: '+86', name: 'China', flag: '🇨🇳' },
  { code: '+90', name: 'Turkey', flag: '🇹🇷' },
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+92', name: 'Pakistan', flag: '🇵🇰' },
  { code: '+93', name: 'Afghanistan', flag: '🇦🇫' },
  { code: '+94', name: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+95', name: 'Myanmar', flag: '🇲🇲' },
  { code: '+98', name: 'Iran', flag: '🇮🇷' },
  { code: '+212', name: 'Morocco', flag: '🇲🇦' },
  { code: '+213', name: 'Algeria', flag: '🇩🇿' },
  { code: '+216', name: 'Tunisia', flag: '🇹🇳' },
  { code: '+218', name: 'Libya', flag: '🇱🇾' },
  { code: '+220', name: 'Gambia', flag: '🇬🇲' },
  { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
  { code: '+351', name: 'Portugal', flag: '🇵🇹' },
  { code: '+352', name: 'Luxembourg', flag: '🇱🇺' },
  { code: '+353', name: 'Ireland', flag: '🇮🇪' },
  { code: '+354', name: 'Iceland', flag: '🇮🇸' },
  { code: '+355', name: 'Albania', flag: '🇦🇱' },
  { code: '+356', name: 'Malta', flag: '🇲🇹' },
  { code: '+357', name: 'Cyprus', flag: '🇨🇾' },
  { code: '+358', name: 'Finland', flag: '🇫🇮' },
  { code: '+359', name: 'Bulgaria', flag: '🇧🇬' },
  { code: '+370', name: 'Lithuania', flag: '🇱🇹' },
  { code: '+371', name: 'Latvia', flag: '🇱🇻' },
  { code: '+372', name: 'Estonia', flag: '🇪🇪' },
  { code: '+373', name: 'Moldova', flag: '🇲🇩' },
  { code: '+374', name: 'Armenia', flag: '🇦🇲' },
  { code: '+375', name: 'Belarus', flag: '🇧🇾' },
  { code: '+376', name: 'Andorra', flag: '🇦🇩' },
  { code: '+377', name: 'Monaco', flag: '🇲🇨' },
  { code: '+378', name: 'San Marino', flag: '🇸🇲' },
  { code: '+380', name: 'Ukraine', flag: '🇺🇦' },
  { code: '+381', name: 'Serbia', flag: '🇷🇸' },
  { code: '+382', name: 'Montenegro', flag: '🇲🇪' },
  { code: '+383', name: 'Kosovo', flag: '🇽🇰' },
  { code: '+385', name: 'Croatia', flag: '🇭🇷' },
  { code: '+386', name: 'Slovenia', flag: '🇸🇮' },
  { code: '+387', name: 'Bosnia', flag: '🇧🇦' },
  { code: '+389', name: 'North Macedonia', flag: '🇲🇰' },
  { code: '+420', name: 'Czech Republic', flag: '🇨🇿' },
  { code: '+421', name: 'Slovakia', flag: '🇸🇰' },
  { code: '+423', name: 'Liechtenstein', flag: '🇱🇮' },
  { code: '+852', name: 'Hong Kong', flag: '🇭🇰' },
  { code: '+853', name: 'Macau', flag: '🇲🇴' },
  { code: '+886', name: 'Taiwan', flag: '🇹🇼' },
  { code: '+960', name: 'Maldives', flag: '🇲🇻' },
  { code: '+961', name: 'Lebanon', flag: '🇱🇧' },
  { code: '+962', name: 'Jordan', flag: '🇯🇴' },
  { code: '+963', name: 'Syria', flag: '🇸🇾' },
  { code: '+964', name: 'Iraq', flag: '🇮🇶' },
  { code: '+965', name: 'Kuwait', flag: '🇰🇼' },
  { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+967', name: 'Yemen', flag: '🇾🇪' },
  { code: '+968', name: 'Oman', flag: '🇴🇲' },
  { code: '+971', name: 'UAE', flag: '🇦🇪' },
  { code: '+972', name: 'Israel', flag: '🇮🇱' },
  { code: '+973', name: 'Bahrain', flag: '🇧🇭' },
  { code: '+974', name: 'Qatar', flag: '🇶🇦' },
  { code: '+975', name: 'Bhutan', flag: '🇧🇹' },
  { code: '+976', name: 'Mongolia', flag: '🇲🇳' },
  { code: '+977', name: 'Nepal', flag: '🇳🇵' },
];

/**
 * Country code to flag emoji mapping
 */
const COUNTRY_FLAGS: Record<string, string> = {
  '+1': '🇺🇸',   // US/Canada
  '+7': '🇷🇺',   // Russia
  '+20': '🇪🇬',  // Egypt
  '+27': '🇿🇦',  // South Africa
  '+30': '🇬🇷',  // Greece
  '+31': '🇳🇱',  // Netherlands
  '+32': '🇧🇪',  // Belgium
  '+33': '🇫🇷',  // France
  '+34': '🇪🇸',  // Spain
  '+36': '🇭🇺',  // Hungary
  '+39': '🇮🇹',  // Italy
  '+40': '🇷🇴',  // Romania
  '+41': '🇨🇭',  // Switzerland
  '+43': '🇦🇹',  // Austria
  '+44': '🇬🇧',  // UK
  '+45': '🇩🇰',  // Denmark
  '+46': '🇸🇪',  // Sweden
  '+47': '🇳🇴',  // Norway
  '+48': '🇵🇱',  // Poland
  '+49': '🇩🇪',  // Germany
  '+51': '🇵🇪',  // Peru
  '+52': '🇲🇽',  // Mexico
  '+53': '🇨🇺',  // Cuba
  '+54': '🇦🇷',  // Argentina
  '+55': '🇧🇷',  // Brazil
  '+56': '🇨🇱',  // Chile
  '+57': '🇨🇴',  // Colombia
  '+58': '🇻🇪',  // Venezuela
  '+60': '🇲🇾',  // Malaysia
  '+61': '🇦🇺',  // Australia
  '+62': '🇮🇩',  // Indonesia
  '+63': '🇵🇭',  // Philippines
  '+64': '🇳🇿',  // New Zealand
  '+65': '🇸🇬',  // Singapore
  '+66': '🇹🇭',  // Thailand
  '+81': '🇯🇵',  // Japan
  '+82': '🇰🇷',  // South Korea
  '+84': '🇻🇳',  // Vietnam
  '+86': '🇨🇳',  // China
  '+90': '🇹🇷',  // Turkey
  '+91': '🇮🇳',  // India
  '+92': '🇵🇰',  // Pakistan
  '+93': '🇦🇫',  // Afghanistan
  '+94': '🇱🇰',  // Sri Lanka
  '+95': '🇲🇲',  // Myanmar
  '+98': '🇮🇷',  // Iran
  '+212': '🇲🇦', // Morocco
  '+213': '🇩🇿', // Algeria
  '+216': '🇹🇳', // Tunisia
  '+218': '🇱🇾', // Libya
  '+220': '🇬🇲', // Gambia
  '+234': '🇳🇬', // Nigeria
  '+351': '🇵🇹', // Portugal
  '+352': '🇱🇺', // Luxembourg
  '+353': '🇮🇪', // Ireland
  '+354': '🇮🇸', // Iceland
  '+355': '🇦🇱', // Albania
  '+356': '🇲🇹', // Malta
  '+357': '🇨🇾', // Cyprus
  '+358': '🇫🇮', // Finland
  '+359': '🇧🇬', // Bulgaria
  '+370': '🇱🇹', // Lithuania
  '+371': '🇱🇻', // Latvia
  '+372': '🇪🇪', // Estonia
  '+373': '🇲🇩', // Moldova
  '+374': '🇦🇲', // Armenia
  '+375': '🇧🇾', // Belarus
  '+376': '🇦🇩', // Andorra
  '+377': '🇲🇨', // Monaco
  '+378': '🇸🇲', // San Marino
  '+380': '🇺🇦', // Ukraine
  '+381': '🇷🇸', // Serbia
  '+382': '🇲🇪', // Montenegro
  '+383': '🇽🇰', // Kosovo
  '+385': '🇭🇷', // Croatia
  '+386': '🇸🇮', // Slovenia
  '+387': '🇧🇦', // Bosnia
  '+389': '🇲🇰', // North Macedonia
  '+420': '🇨🇿', // Czech Republic
  '+421': '🇸🇰', // Slovakia
  '+423': '🇱🇮', // Liechtenstein
  '+852': '🇭🇰', // Hong Kong
  '+853': '🇲🇴', // Macau
  '+886': '🇹🇼', // Taiwan
  '+960': '🇲🇻', // Maldives
  '+961': '🇱🇧', // Lebanon
  '+962': '🇯🇴', // Jordan
  '+963': '🇸🇾', // Syria
  '+964': '🇮🇶', // Iraq
  '+965': '🇰🇼', // Kuwait
  '+966': '🇸🇦', // Saudi Arabia
  '+967': '🇾🇪', // Yemen
  '+968': '🇴🇲', // Oman
  '+971': '🇦🇪', // UAE
  '+972': '🇮🇱', // Israel
  '+973': '🇧🇭', // Bahrain
  '+974': '🇶🇦', // Qatar
  '+975': '🇧🇹', // Bhutan
  '+976': '🇲🇳', // Mongolia
  '+977': '🇳🇵', // Nepal
};

/**
 * Get flag emoji for country code
 */
export function getFlagForCountryCode(code: string): string {
  // Try exact match first
  if (COUNTRY_FLAGS[code]) {
    return COUNTRY_FLAGS[code];
  }

  // Try progressive matching for longer codes (e.g., +212 -> check +21, +2)
  for (let i = code.length - 1; i >= 2; i--) {
    const partial = code.slice(0, i);
    if (COUNTRY_FLAGS[partial]) {
      return COUNTRY_FLAGS[partial];
    }
  }

  // Default to world emoji if no match
  return '🌍';
}

/**
 * Validate US phone number
 * - Must be exactly 10 digits
 * - First digit cannot be 0 or 1
 */
export function isValidUSPhoneNumber(value: string): boolean {
  // Remove all non-numeric characters
  const numbers = value.replace(/\D/g, '');

  // Must be exactly 10 digits
  if (numbers.length !== 10) {
    return false;
  }

  // First digit can't be 0 or 1 (invalid US area codes)
  if (numbers[0] === '0' || numbers[0] === '1') {
    return false;
  }

  return true;
}

/**
 * Initialize form handling
 */
export function initializeSMSOptInForm(): void {
  const form = document.getElementById('sms-opt-in-form') as HTMLFormElement | null;
  const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
  const countryCodeInput = document.getElementById('country-code') as HTMLInputElement | null;
  const countryFlag = document.getElementById('country-flag') as HTMLElement | null;
  const phoneError = document.getElementById('phone-error') as HTMLElement | null;
  const phoneWrapper = phoneInput?.closest('.phone-input-wrapper') as HTMLElement | null;
  const successMessage = document.getElementById('success-message') as HTMLElement | null;
  const formCard = document.querySelector('.opt-in-form') as HTMLElement | null;
  const dropdownBtn = document.getElementById('country-dropdown-btn') as HTMLButtonElement | null;
  const dropdown = document.getElementById('country-dropdown') as HTMLElement | null;

  if (!form || !phoneInput || !countryCodeInput || !countryFlag || !phoneError || !phoneWrapper || !successMessage || !formCard || !dropdownBtn || !dropdown) {
    console.error('SMS Opt-In: Required form elements not found');
    return;
  }

  // Update flag emoji when country code changes
  const updateFlag = () => {
    const code = countryCodeInput.value;
    const flag = getFlagForCountryCode(code);
    countryFlag.textContent = flag;
  };

  // Show all countries in dropdown
  const showAllCountries = () => {
    const dropdownContent = dropdown.querySelector('.country-dropdown-content');
    if (!dropdownContent) return;

    dropdownContent.innerHTML = '';

    // Show top 10 countries
    COUNTRIES.slice(0, 10).forEach(country => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'country-option';
      button.setAttribute('data-code', country.code);
      button.setAttribute('data-name', country.name);

      button.innerHTML = `
        <span class="country-option-flag">${country.flag}</span>
        <span class="country-option-name">${country.name}</span>
        <span class="country-option-code">${country.code}</span>
      `;

      button.addEventListener('click', () => {
        countryCodeInput.value = country.code;
        updateFlag();
        dropdown.style.display = 'none';
        phoneInput.focus();
      });

      dropdownContent.appendChild(button);
    });

    dropdown.style.display = 'block';
  };

  // Toggle dropdown
  const toggleDropdown = () => {
    const isVisible = dropdown.style.display !== 'none';
    if (isVisible) {
      dropdown.style.display = 'none';
    } else {
      showAllCountries();
    }
  };

  // Close dropdown
  const closeDropdown = () => {
    dropdown.style.display = 'none';
  };

  // Dropdown button click
  dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown();
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.country-code-input')) {
      closeDropdown();
    }
  });

  // Populate dropdown with filtered countries
  const populateDropdown = (searchTerm: string) => {
    const search = searchTerm.toLowerCase();
    const maxVisible = 10;

    // Filter countries by code or name
    const filtered = COUNTRIES.filter(country => {
      return country.code.toLowerCase().includes(search) ||
             country.name.toLowerCase().includes(search);
    }).slice(0, maxVisible);

    // Clear existing content
    const dropdownContent = dropdown.querySelector('.country-dropdown-content');
    if (!dropdownContent) return;

    dropdownContent.innerHTML = '';

    // If no matches, show message
    if (filtered.length === 0) {
      dropdown.style.display = 'none';
      return;
    }

    // Create option elements
    filtered.forEach(country => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'country-option';
      button.setAttribute('data-code', country.code);
      button.setAttribute('data-name', country.name);

      button.innerHTML = `
        <span class="country-option-flag">${country.flag}</span>
        <span class="country-option-name">${country.name}</span>
        <span class="country-option-code">${country.code}</span>
      `;

      // Add click handler
      button.addEventListener('click', () => {
        countryCodeInput.value = country.code;
        updateFlag();
        dropdown.style.display = 'none';
        phoneInput.focus();
      });

      dropdownContent.appendChild(button);
    });

    // Show dropdown if there are matches and search term is not empty
    if (filtered.length > 0 && searchTerm.length > 0) {
      dropdown.style.display = 'block';
    }
  };

  // Format country code input (ensure it starts with +)
  countryCodeInput.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    let value = target.value;

    // Ensure it starts with +
    if (!value.startsWith('+')) {
      value = '+' + value.replace(/\+/g, '');
    }

    // Only allow + and digits
    value = value.replace(/[^\d+]/g, '');

    // Only one + at the start
    if (value.indexOf('+') > 0) {
      value = '+' + value.replace(/\+/g, '');
    }

    target.value = value;
    updateFlag();

    // Populate dropdown based on input
    populateDropdown(value);

    // Clear error state
    phoneError.classList.remove('visible');
    phoneWrapper.classList.remove('error');
  });

  // Show filtered options when clicking/focusing on country code input
  countryCodeInput.addEventListener('focus', () => {
    if (countryCodeInput.value) {
      populateDropdown(countryCodeInput.value);
    }
  });

  // Clear error state when user types in phone
  phoneInput.addEventListener('input', () => {
    phoneError.classList.remove('visible');
    phoneWrapper.classList.remove('error');
  });

  // Handle form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const countryCode = countryCodeInput.value;
    const phoneValue = phoneInput.value;

    // Check if country code is US
    if (countryCode !== '+1') {
      phoneError.textContent = 'Sorry, we only support US phone numbers at this time. Please enter +1 as the country code.';
      phoneError.classList.add('visible');
      phoneWrapper.classList.add('error');
      countryCodeInput.focus();
      return;
    }

    // Validate US phone number
    const isValid = isValidUSPhoneNumber(phoneValue);

    if (!isValid) {
      phoneError.textContent = 'Please enter a valid 10-digit US phone number.';
      phoneError.classList.add('visible');
      phoneWrapper.classList.add('error');
      phoneInput.focus();
      return;
    }

    // Get form data
    const consentInput = document.getElementById('consent') as HTMLInputElement | null;
    const consent = consentInput?.checked ?? false;

    // Disable submit button and show loading state
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Processing...';
    }

    // Determine API URL based on environment
    const apiUrl = getApiUrl();
    const endpoint = `${apiUrl}/api/v1/sms/opt-in`;
    const payload = {
      country_code: countryCode,
      phone: phoneValue,
      consent: consent
    };

    console.log('SMS Opt-In Request:', {
      endpoint,
      payload
    });

    try {
      // Send to backend API
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      console.log('SMS Opt-In Response:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries())
      });

      if (!response.ok) {
        // Handle HTTP errors
        if (response.status === 429) {
          throw new Error('Too many requests. Please try again in a few minutes.');
        }
        const errorData = await response.json().catch(() => ({}));
        console.error('SMS Opt-In Error:', errorData);
        throw new Error(errorData.message || `Server error (${response.status})`);
      }

      const data = await response.json();
      console.log('SMS Opt-In Success - Response Data:', data);

      // Update success message based on consent status
      const titleElement = successMessage.querySelector('h3');
      const messageElement = successMessage.querySelector('p:first-of-type');

      if (titleElement && messageElement) {
        if (data.consent_status === 'opted_in') {
          titleElement.textContent = "You're All Set!";
          messageElement.textContent = "You'll receive health alerts about your family member at the phone number you provided.";
        } else {
          // Opted out
          titleElement.textContent = "Preferences Updated";
          messageElement.textContent = "You've successfully opted out of SMS alerts. You won't receive any messages from us.";
        }
      }

      // Show success message
      formCard.style.display = 'none';
      successMessage.style.display = 'block';

      // Scroll to success message
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (error) {
      // Show error to user
      let errorMessage = 'An unexpected error occurred. Please try again.';

      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        // Connection refused - CORS or network error
        errorMessage = 'Connection error. Please check your internet connection and try again.';
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      console.error('SMS Opt-In Error:', error);
      phoneError.textContent = errorMessage;
      phoneError.classList.add('visible');
      phoneWrapper.classList.add('error');

      // Re-enable submit button
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Enable SMS Alerts';
      }
    }
  });
}


/**
 * Get API URL based on environment
 */
export function getApiUrl(): string {
  // For local development
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return 'http://localhost:8000';
  }

  // For production - Cloud Run URL
  return import.meta.env.PUBLIC_API_URL || 'https://deedee-health-backend-291940511306.us-east4.run.app';
}
