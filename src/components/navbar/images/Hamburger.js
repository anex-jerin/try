

const Hamburger = () => {
  return (
    <div className='hamburger'>
      <svg 
        width='31'
        height='34'
        viewBox='0 0 31 34'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M28.0052 8.34204L17.4286 1.89069C16.4855 1.31543 15.3025 1.30503 14.3494 1.86362L3.29738 8.34114C2.39215 8.87169 1.82989 9.83663 1.81464 10.8858L1.63234 23.4273C1.61638 24.5254 2.20172 25.5445 3.15832 26.084L13.9677 32.1802C14.8771 32.6931 15.9878 32.6962 16.9002 32.1885L27.9017 26.0664C28.8531 25.537 29.443 24.5337 29.443 23.445V10.9032C29.443 9.8572 28.8981 8.88673 28.0052 8.34204Z'
          stroke='white'
          stroke-width='2'
        />
        <line
          x1='9.04541'
          y1='11.749'
          x2='22.0039'
          y2='11.749'
          stroke='white'
          stroke-width='2'
          stroke-linecap='round'
        />
        <line
          x1='9.04541'
          y1='17.0854'
          x2='22.0039'
          y2='17.0854'
          stroke='white'
          stroke-width='2'
          stroke-linecap='round'
        />
        <line
          x1='9.04541'
          y1='22.5837'
          x2='22.0039'
          y2='22.5837'
          stroke='white'
          stroke-width='2'
          stroke-linecap='round'
        />
      </svg>
    </div>
  );
}

export default Hamburger