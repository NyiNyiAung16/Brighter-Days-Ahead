export default function DotsIcon({ onClick, className }) {
  return (
    <svg
      width="22px"
      id="Layer_1"
      enableBackground="new 0 0 128 128"
      version="1.1"
      viewBox="0 0 128 128"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={onClick}
      className={className}
    >
      <g>
        <circle cx="24.879" cy="64" r="10.059" style={{fill:"#555"}} />
        <circle cx="24.878" cy="100.09" r="10.059" style={{fill:"#555"}} />
        <circle cx="24.879" cy="27.91" r="10.058" style={{fill:"#555"}} />
        <line
          style={{fill:'none',stroke:"#555",strokeWidth:14.3337,strokeMiterlimit:10}}
          x1="48.682"
          x2="113.183"
          y1="27.91"
          y2="27.91"
        />
        <line
          style={{fill:'none',stroke:"#555",strokeWidth:14.3337,strokeMiterlimit:10}}
          x1="48.682"
          x2="113.183"
          y1="64"
          y2="64"
        />
        <line
          style={{fill:'none',stroke:"#555",strokeWidth:14.3337,strokeMiterlimit:10}}
          x1="48.682"
          x2="113.183"
          y1="100.09"
          y2="100.09"
        />
      </g>
    </svg>
  );
}
