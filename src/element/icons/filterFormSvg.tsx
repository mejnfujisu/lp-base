const filterFormSvg = () => {
   return (
      <svg width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g filter="url(#filter0_d_39_32)">
            <circle cx="9" cy="9" r="8" fill="#8BC34A" />
            <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="2" />
         </g>
         <rect x="20" y="8" width="14" height="2" rx="1" fill="#8BC34A" />
         <defs>
            <filter id="filter0_d_39_32" x="0" y="0" width="18" height="18" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
               <feFlood floodOpacity="0" result="BackgroundImageFix" />
               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
               <feOffset />
               <feGaussianBlur stdDeviation="0.5" />
               <feComposite in2="hardAlpha" operator="out" />
               <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
               <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_32" />
               <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_39_32" result="shape" />
            </filter>
         </defs>
      </svg>
   )
}

export default filterFormSvg;