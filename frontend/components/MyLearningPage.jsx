import React from "react";


/* -------------------------------------------------------------
   SVG Icon Components
------------------------------------------------------------- */

// Corrected Codequest Logo (256x58)
const CodequestLogo = () => (
    <svg width="240" height="58" viewBox="0 0 240 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_78_206)">
    <path d="M26.7531 45.1766L27.1453 43.8549L25.8236 43.4626L26.2159 42.1409L24.8942 41.7486L25.2864 40.4269L23.9647 40.0346L24.357 38.7129L23.0353 38.3206L23.4275 36.9989L22.1058 36.6066L22.4981 35.2849L21.1763 34.8926L21.5686 33.5709L20.2469 33.1786L20.6392 31.8569L19.3174 31.4646L19.7097 30.1429L18.388 29.7506L17.9957 31.0724L15.3523 30.2878L16.1368 27.6444L17.4585 28.0366L17.8508 26.7149L19.1725 27.1072L19.5648 25.7855L18.2431 25.3932L18.6353 24.0715L17.3136 23.6792L17.7059 22.3575L16.3842 21.9652L17.1687 19.3218L18.4904 19.714L18.8827 18.3923L21.5261 19.1768L21.1339 20.4986L22.4556 20.8908L22.0633 22.2126L23.3851 22.6048L22.9928 23.9266L24.3145 24.3188L24.7068 22.9971L26.0285 23.3894L26.4208 22.0676L29.0642 22.8522L28.2797 25.4956L26.958 25.1034L26.5657 26.4251L27.8874 26.8174L27.4951 28.1391L28.8169 28.5314L28.4246 29.8531L29.7463 30.2453L29.354 31.5671L30.6758 31.9593L30.2835 33.2811L31.6052 33.6733L31.213 34.9951L32.5347 35.3873L32.1424 36.7091L33.4641 37.1013L33.0719 38.4231L34.3936 38.8153L34.0013 40.137L35.323 40.5293L34.9308 41.851L36.2525 42.2433L34.2911 48.8519L27.6825 46.8906L28.0748 45.5689L26.7531 45.1766ZM28.8593 42.9254L30.1811 43.3177L29.7888 44.6394L32.4322 45.4239L32.8245 44.1022L31.5028 43.7099L31.895 42.3882L30.5733 41.996L30.9656 40.6742L29.6439 40.282L30.0361 38.9602L28.7144 38.568L29.1067 37.2462L27.785 36.854L28.1772 35.5322L26.8555 35.14L27.2478 33.8183L25.9261 33.426L26.3183 32.1043L24.9966 31.712L25.3889 30.3903L22.7454 29.6057L22.3532 30.9274L23.6749 31.3197L23.2826 32.6414L24.6043 33.0337L24.2121 34.3554L25.5338 34.7477L25.1415 36.0694L26.4632 36.4617L26.071 37.7834L27.3927 38.1757L27.0004 39.4974L28.3221 39.8897L27.9299 41.2114L29.2516 41.6037L28.8593 42.9254Z" fill="black"/>
    </g>
    <g clip-path="url(#clip1_78_206)">
    <path d="M32.3869 51.7889L32.8149 50.5878L31.6138 50.1598L32.0418 48.9588L30.8407 48.5308L31.2686 47.3297L30.0676 46.9018L30.4955 45.7007L29.2944 45.2728L29.7224 44.0717L28.5213 43.6438L28.9493 42.4427L27.7482 42.0147L28.1762 40.8137L26.9751 40.3857L27.403 39.1847L26.202 38.7567L26.6299 37.5556L25.4288 37.1277L25.0009 38.3288L22.5987 37.4729L23.4546 35.0707L24.6557 35.4987L25.0837 34.2976L26.2847 34.7255L26.7127 33.5245L25.5116 33.0965L25.9396 31.8955L24.7385 31.4675L25.1664 30.2664L23.9654 29.8385L24.8213 27.4364L26.0223 27.8643L26.4503 26.6632L28.8524 27.5191L28.4245 28.7202L29.6255 29.1481L29.1976 30.3492L30.3987 30.7772L29.9707 31.9782L31.1718 32.4062L31.5997 31.2051L32.8008 31.6331L33.2288 30.432L35.6309 31.2879L34.775 33.69L33.5739 33.2621L33.146 34.4631L34.3471 34.8911L33.9191 36.0922L35.1202 36.5201L34.6922 37.7212L35.8933 38.1491L35.4653 39.3502L36.6664 39.7782L36.2385 40.9792L37.4395 41.4072L37.0116 42.6082L38.2127 43.0362L37.7847 44.2373L38.9858 44.6652L38.5578 45.8663L39.7589 46.2942L39.331 47.4953L40.532 47.9232L40.1041 49.1243L41.3051 49.5523L39.1654 55.5576L33.1601 53.4179L33.588 52.2168L32.3869 51.7889ZM34.4439 49.8147L35.645 50.2426L35.217 51.4437L37.6192 52.2996L38.0471 51.0985L36.846 50.6706L37.274 49.4695L36.0729 49.0415L36.5009 47.8405L35.2998 47.4125L35.7277 46.2115L34.5267 45.7835L34.9546 44.5824L33.7536 44.1545L34.1815 42.9534L32.9804 42.5255L33.4084 41.3244L32.2073 40.8964L32.6353 39.6954L31.4342 39.2674L31.8621 38.0664L29.46 37.2105L29.032 38.4115L30.2331 38.8395L29.8052 40.0406L31.0062 40.4685L30.5783 41.6696L31.7794 42.0975L31.3514 43.2986L32.5525 43.7265L32.1245 44.9276L33.3256 45.3556L32.8977 46.5566L34.0987 46.9846L33.6708 48.1856L34.8718 48.6136L34.4439 49.8147Z" fill="#E0B0FF"/>
    </g>
    <path d="M25.5 50V47H22.5V44H19.5V35H22.5V32H25.5V29H37.5V32H40.5V35H34.5V32H28.5V35H25.5V44H28.5V47H34.5V44H40.5V47H37.5V50H25.5ZM47.94 50V47H44.94V38H47.94V35H62.94V38H65.94V47H62.94V50H47.94ZM50.94 47H59.94V38H50.94V47ZM73.38 50V47H70.38V38H73.38V35H85.38V29H91.38V50H73.38ZM76.38 47H85.38V38H76.38V47ZM98.82 50V47H95.82V38H98.82V35H113.82V38H116.82V44H101.82V47H113.82V50H98.82ZM101.82 41H110.82V38H101.82V41Z" fill="#D4C0FF"/>
    <path d="M142.26 32V44H139.26V47H136.26V50H124.26V47H121.26V32H124.26V29H139.26V32H142.26ZM136.26 32H127.26V47H133.26V44H130.26V41H136.26V32ZM139.26 50V47H142.26V50H139.26ZM149.7 50V47H146.7V35H152.7V47H161.7V35H167.7V50H149.7ZM175.14 50V47H172.14V38H175.14V35H190.14V38H193.14V44H178.14V47H190.14V50H175.14ZM178.14 41H187.14V38H178.14V41ZM197.58 50V47H212.58V44H200.58V41H197.58V38H200.58V35H215.58V38H203.58V41H215.58V44H218.58V47H215.58V50H197.58ZM224.34 50V38H218.34V35H224.34V29H230.34V35H236.34V38H230.34V50H224.34Z" fill="#E0B0FF"/>
    <defs>
    <clipPath id="clip0_78_206">
    <rect width="26.5401" height="29.6753" fill="white" transform="translate(25.9434 36) rotate(-163.47)"/>
    </clipPath>
    <clipPath id="clip1_78_206">
    <rect width="10.2662" height="10.7349" fill="white" transform="translate(40.5676 57.5579) rotate(-160.389)"/>
    </clipPath>
    </defs>
    </svg>
    
);

// Dashboard Icon (unchanged)
const DashboardIcon = () => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.1667 12.2246V17.2246M11.6667 14.7246H16.6667M5.00004 8.89124H6.66671C7.58718 8.89124 8.33337 8.14504 8.33337 7.22457V5.5579C8.33337 4.63743 7.58718 3.89124 6.66671 3.89124H5.00004C4.07957 3.89124 3.33337 4.63743 3.33337 5.5579V7.22457C3.33337 8.14504 4.07957 8.89124 5.00004 8.89124ZM13.3334 8.89124H15C15.9205 8.89124 16.6667 8.14504 16.6667 7.22457V5.5579C16.6667 4.63743 15.9205 3.89124 15 3.89124H13.3334C12.4129 3.89124 11.6667 4.63743 11.6667 5.5579V7.22457C11.6667 8.14504 12.4129 8.89124 13.3334 8.89124Z" 
      stroke="#91B3FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// My Learning Icon (unchanged)
const MyLearningIcon = () => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6667 11.3912V5.5579C16.6667 4.63743 15.9205 3.89124 15 3.89124H5.00004C4.07957 3.89124 3.33337 4.63743 3.33337 5.5579V11.3912M16.6667 11.3912V15.5579C16.6667 16.4784 15.9205 17.2246 15 17.2246H5.00004C4.07957 17.2246 3.33337 16.4784 3.33337 15.5579V11.3912M16.6667 11.3912H14.5119C14.2909 11.3912 14.0789 11.479 13.9226 11.6353L11.9108 13.6472C11.7545 13.8034 11.5425 13.8912 11.3215 13.8912H8.67855C8.45754 13.8912 8.24558 13.8034 8.0893 13.6472L6.07745 11.6353C5.92117 11.479 5.70921 11.3912 5.4882 11.3912H3.33337" 
      stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Challenges Icon (unchanged)
const ChallengesIcon = () => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.66667 6.39119V3.05786M13.3333 6.39119V3.05786M5.83333 9.72453H14.1667M4.16667 18.0579H15.8333C16.7538 18.0579 17.5 17.3117 17.5 16.3912V6.39119C17.5 5.47072 16.7538 4.72453 15.8333 4.72453H4.16667C3.24619 4.72453 2.5 5.47072 2.5 6.39119V16.3912C2.5 17.3117 3.24619 18.0579 4.16667 18.0579Z" 
      stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Leaderboards Icon (unchanged)
const LeaderboardsIcon = () => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 14.1578H18.1C18.1 14.1578 19 14.1578 19 15.0578V18.6578C19 18.6578 19 19.5578 18.1 19.5578H14.5C14.5 19.5578 13.6 19.5578 13.6 18.6578V15.0578C13.6 15.0578 13.6 14.1578 14.5 14.1578Z" 
      stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.9 14.1578H5.5C5.5 14.1578 6.4 14.1578 6.4 15.0578V18.6578C6.4 18.6578 6.4 19.5578 5.5 19.5578H1.9C1.9 19.5578 1 19.5578 1 18.6578V15.0578C1 15.0578 1 14.1578 1.9 14.1578Z" 
      stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.20005 1.55786H11.8C11.8 1.55786 12.7 1.55786 12.7 2.45786V6.05786C12.7 6.05786 12.7 6.95786 11.8 6.95786H8.20005C8.20005 6.95786 7.30005 6.95786 7.30005 6.05786V2.45786C7.30005 2.45786 7.30005 1.55786 8.20005 1.55786Z" 
      stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.69995 14.1579V11.4579C3.69995 11.2192 3.79477 10.9902 3.96356 10.8215C4.13234 10.6527 4.36126 10.5579 4.59995 10.5579H15.4C15.6386 10.5579 15.8676 10.6527 16.0363 10.8215C16.2051 10.9902 16.3 11.2192 16.3 11.4579V14.1579" 
      stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 10.5579V6.95789" 
      stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Analytics Icon (unchanged)
const AnalyticsIcon = () => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.66667 11.3912V10.5579M10 11.3912V8.89124M13.3333 11.3912V7.22457M6.66667 18.0579L10 14.7246L13.3333 18.0579M2.5 3.89124H17.5M3.33333 3.89124H16.6667V13.8912C16.6667 14.3515 16.2936 14.7246 15.8333 14.7246H4.16667C3.70643 14.7246 3.33333 14.3515 3.33333 13.8912V3.89124Z" 
      stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Messages Icon (unchanged)
const MessagesIcon = () => (
  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.2353 1.05786C14.9373 1.05786 15.6106 1.33675 16.107 1.83317C16.6035 2.32959 16.8824 3.00288 16.8824 3.70492V10.7637C16.8824 11.4658 16.6035 12.1391 16.107 12.6355C15.6106 13.1319 14.9373 13.4108 14.2353 13.4108H9.82353L5.41176 16.0579V13.4108H3.64706C2.94502 13.4108 2.27173 13.1319 1.77531 12.6355C1.27889 12.1391 1 11.4658 1 10.7637V3.70492C1 3.00288 1.27889 2.32959 1.77531 1.83317C2.27173 1.33675 2.94502 1.05786 3.64706 1.05786H14.2353Z" 
      stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.23535 5.9729H12.2942" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.23535 9.41956H10.5295" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Notifications Icon (unchanged)
const NotificationsIcon = () => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 14.7245H16.6667L15.4959 13.5538C15.1784 13.2362 15 12.8056 15 12.3566V9.72453C15 7.5475 13.6087 5.69543 11.6667 5.00904V4.72453C11.6667 3.80405 10.9205 3.05786 10 3.05786C9.07957 3.05786 8.33337 3.80405 8.33337 4.72453V5.00904C6.39139 5.69543 5.00004 7.5475 5.00004 9.72453V12.3566C5.00004 12.8056 4.82166 13.2362 4.50415 13.5538L3.33337 14.7245H7.50004M12.5 14.7245V15.5579C12.5 16.9386 11.3808 18.0579 10 18.0579C8.61933 18.0579 7.50004 16.9386 7.50004 15.5579V14.7245M12.5 14.7245H7.50004" 
      stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Support Icon (unchanged)
const SupportIcon = () => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.8333 13.8912H10V10.5579H9.16667M10 7.22453H10.0083M17.5 10.5579C17.5 14.7 14.1421 18.0579 10 18.0579C5.85786 18.0579 2.5 14.7 2.5 10.5579C2.5 6.41573 5.85786 3.05786 10 3.05786C14.1421 3.05786 17.5 6.41573 17.5 10.5579Z" 
      stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Log Out Icon (unchanged)
const LogoutIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.65625 17.0312H4.53125C4.11685 17.0312 3.71942 16.8666 3.4264 16.5736C3.13337 16.2806 2.96875 15.8832 2.96875 15.4688V4.53125C2.96875 4.11685 3.13337 3.71942 3.4264 3.4264C3.71942 3.13337 4.11685 2.96875 4.53125 2.96875H7.65625" 
      stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.125 13.9062L17.0312 10L13.125 6.09375" 
      stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.0312 10H7.65625" 
      stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* --- Additional Icons for Course Cards --- */

// Calendar Icon (48x48)
const CalendarIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 42C30.6274 42 36 36.6274 36 30C36 23.3726 30.6274 18 24 18C17.3726 18 12 23.3726 12 30C12 36.6274 17.3726 42 24 42Z" fill="#E9EFFD"/>
    <path d="M15.08 38H8C7.46957 38 6.96086 37.7893 6.58579 37.4142C6.21071 37.0391 6 36.5304 6 36V10C6 9.46957 6.21071 8.96086 6.58579 8.58579C6.96086 8.21071 7.46957 8 8 8H40C40.5304 8 41.0391 8.21071 41.4142 8.58579C41.7893 8.96086 42 9.46957 42 10V36C42 36.5304 41.7893 37.0391 41.4142 37.4142C41.0391 37.7893 40.5304 38 40 38H32.92" stroke="#273266" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 18H42M32 6V12M16 6V12M24 18C21.6266 18 19.3065 18.7038 17.3332 20.0224C15.3598 21.3409 13.8217 23.2151 12.9134 25.4078C12.0052 27.6005 11.7676 30.0133 12.2306 32.3411C12.6936 34.6689 13.8365 36.8071 15.5147 38.4853C17.1929 40.1635 19.3311 41.3064 21.6589 41.7694C23.9867 42.2325 26.3995 41.9948 28.5922 41.0866C30.7849 40.1783 32.6591 38.6402 33.9776 36.6668C35.2962 34.6935 36 32.3734 36 30C36 26.8174 34.7357 23.7652 32.4853 21.5147C30.2348 19.2643 27.1826 18 24 18ZM24 32.64L26.6 34L26.1 31.1L28.1 29.1L25.2 28.68L24 26L22.7 28.64L19.8 29.06L21.8 31.06L21.4 34L24 32.64Z" stroke="#273266" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Difficulty Icon (15x16)
const DifficultyIcon = () => (
  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 0.666626C5.42812 0.666626 3.75 2.34475 3.75 4.41663C3.75 6.4885 5.42812 8.16663 7.5 8.16663C9.57187 8.16663 11.25 6.4885 11.25 4.41663C11.25 2.34475 9.57187 0.666626 7.5 0.666626ZM9.375 4.41663C9.375 3.38538 8.53125 2.54163 7.5 2.54163C6.46875 2.54163 5.625 3.38538 5.625 4.41663C5.625 5.44788 6.46875 6.29163 7.5 6.29163C8.53125 6.29163 9.375 5.44788 9.375 4.41663ZM13.125 13.7916C12.9375 13.126 10.0312 11.9166 7.5 11.9166C4.97813 11.9166 2.09063 13.1166 1.875 13.7916H13.125ZM0 13.7916C0 11.2979 4.99687 10.0416 7.5 10.0416C10.0031 10.0416 15 11.2979 15 13.7916V15.6666H0V13.7916Z" fill="#425466"/>
  </svg>
);

// Progress Icon (15x16) – similar to difficulty icon but different fill color
const ProgressIcon = () => (
  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 0.666626C5.42812 0.666626 3.75 2.34475 3.75 4.41663C3.75 6.4885 5.42812 8.16663 7.5 8.16663C9.57187 8.16663 11.25 6.4885 11.25 4.41663C11.25 2.34475 9.57187 0.666626 7.5 0.666626ZM9.375 4.41663C9.375 3.38538 8.53125 2.54163 7.5 2.54163C6.46875 2.54163 5.625 3.38538 5.625 4.41663C5.625 5.44788 6.46875 6.29163 7.5 6.29163C8.53125 6.29163 9.375 5.44788 9.375 4.41663ZM13.125 13.7916C12.9375 13.126 10.0312 11.9166 7.5 11.9166C4.97813 11.9166 2.09063 13.1166 1.875 13.7916H13.125ZM0 13.7916C0 11.2979 4.99687 10.0416 7.5 10.0416C10.0031 10.0416 15 11.2979 15 13.7916V15.6666H0V13.7916Z" fill="#425466"/>
  </svg>
);



/* -------------------------------------------------------------
   Navigation Data Arrays
------------------------------------------------------------- */

const primaryNavItems = [
  { label: "Dashboard", Icon: DashboardIcon},
  { label: "My Learning", Icon: MyLearningIcon, active: true },
  { label: "Challenges", Icon: ChallengesIcon },
  { label: "Leaderboards", Icon: LeaderboardsIcon },
  { label: "Analytics", Icon: AnalyticsIcon },
  { label: "Messages", Icon: MessagesIcon },
  { label: "Notifications", Icon: NotificationsIcon },
];

const secondaryNavItems = [
  { label: "Support", Icon: SupportIcon },
  { label: "Log out", Icon: LogoutIcon },
];

/* -------------------------------------------------------------
   Main Component: MyLearningPage
------------------------------------------------------------- */
function MyLearningPage() {
  return (
    <div className="min-h-screen bg-[#F2ECFE] flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="bg-[#F9FAFB] shadow-[0_16px_44px_rgba(0,0,0,0.07)] rounded-r-[16px] 
                        w-full lg:w-[280px] h-auto lg:h-screen flex flex-col">
        {/* Header: Logo */}
        <div className="relative flex items-center justify-center p-6 h-[105px]">
          <div className="relative">
            <CodequestLogo />
          </div>
          {/* Expand Icon */}
          <div className="absolute right-3 top-7 w-6 h-6 flex items-center justify-center rounded-full border border-[#E2E8F0] bg-[#F9FAFB]">
            <div className="w-2 h-2 bg-[#081021] rotate-90" />
          </div>
        </div>

        {/* Primary Navigation */}
        <nav className="flex-1 flex flex-col px-6 space-y-2">
          {primaryNavItems.map(({ label, Icon, active }, index) => (
            <div
              key={index}
              className={`flex items-center px-4 py-3 gap-3 rounded-full cursor-pointer ${
                active ? "bg-[#EEF2FF]" : "hover:bg-gray-100"
              }`}
            >
              <Icon />
              <span className={`text-sm font-medium ${active ? "text-[#273266]" : "text-[#64748B]"}`}>
                {label}
              </span>
            </div>
          ))}
          <hr className="my-2 border-[#E2E8F0]" />
          {secondaryNavItems.map(({ label, Icon }, index) => (
            <div key={index} className="flex items-center px-4 py-3 gap-3 rounded-full hover:bg-gray-100 cursor-pointer">
              <Icon />
              <span className="text-sm font-medium text-[#64748B]">{label}</span>
            </div>
          ))}
        </nav>

        {/* Footer: User Info */}
        <footer className="mt-auto border-t border-[#E2E8F0] p-6">
          <div className="flex items-center gap-3 bg-[#E2E8F0] rounded-[12px] p-3">
            <div className="w-10 h-10 bg-[#FFB31F] rounded-full" />
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#64748B]">Welcome back 👋</span>
              <span className="text-sm text-[#64748B]">John Doe</span>
            </div>
          </div>
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10">
        {/* Header Row: "My Learning" and Date */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <div className="flex items-center bg-white rounded-full px-4 py-2 mb-4 sm:mb-0">
        <h1 className="text-[40px] leading-[20px] text-[#5E1BEE] font-jersey20">
                    My Learning
                </h1>
                </div>
          <div className="flex items-center bg-[#273266] rounded-full px-4 py-2">
            <span className="text-white text-sm">Tuesday March 26th 2025</span>
          </div>
        </div>

        {/* Courses Section */}
        <div className="bg-white border border-black/40 shadow-md rounded-[25px] p-6">
          <div className="px-6 py-8 flex items-center">
            <h2 className="text-[#5E1BEE] text-2xl font-semibold">Your Courses</h2>
          </div>
          <hr className="border-[#273266] mb-2" />
          <div className="space-y-6">
            <CourseCard
              title="JavaScript 101"
              description="Write an amazing description in this dedicated card section."
              difficulty={3}
              progress={30}
            />
            <CourseCard
              title="Python 101"
              description="Write an amazing description in this dedicated card section."
              difficulty={2}
              progress={50}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

/* -------------------------------------------------------------
   Reusable CourseCard Component
------------------------------------------------------------- */
function CourseCard({ title, description, difficulty, progress }) {
  return (
    <div className="bg-[#F9FAFB] shadow-md rounded-[16px] mx-auto max-w-4xl">
      {/* Top bar with icon (calendar) and Start badge */}
      <div className="flex justify-between items-center bg-[#E4D9FC] p-2 rounded-t-[16px]">
        <div className="w-12 h-12">
          {/* Calendar icon inserted here */}
          <CalendarIcon />
        </div>
        <div className="flex items-center justify-center px-3 py-1 gap-1 rounded-full bg-[#FFAFCC]">
          <span className="text-black font-bold text-xl">Start</span>
        </div>
      </div>
      {/* Content */}
      <div className="p-3 h-[202px] flex flex-col justify-between gap-2">
        <h3 className="text-xl font-medium text-[#16192C]">{title}</h3>
        <p className="text-sm text-[#425466]">{description}</p>
        <div className="flex flex-wrap sm:flex-row items-center gap-2">
          {/* Difficulty Info */}
          <div className="flex items-center gap-1">
            <DifficultyIcon />
            <span className="text-sm font-semibold text-[#425466]">Difficulty: {difficulty}</span>
          </div>
          {/* Progress Info */}
          <div className="flex items-center gap-1">
            <ProgressIcon />
            <span className="text-sm font-semibold text-[#425466]">Progress: {progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyLearningPage;


