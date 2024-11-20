export default function TrashIcon({ className, onClick }) {
    return (
        <svg viewBox="0 0 512 512" width="20" className={className} xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
        <title />
        <path
          d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
         style={{fill:'none',stroke:'#b42529',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}
        />
        <line
          style={{stroke:'#b42529',strokeLinecap:'round',strokeMiterlimit:10,strokeWidth:'32px'}}
          x1="80"
          x2="432"
          y1="112"
          y2="112"
        />
        <path
          d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
         style={{fill:'none',stroke:'#b42529',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}
        />
        <line
          style={{fill:'none',stroke:'#b42529',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}
          x1="256"
          x2="256"
          y1="176"
          y2="400"
        />
        <line
          style={{fill:'none',stroke:'#b42529',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}
          x1="184"
          x2="192"
          y1="176"
          y2="400"
        />
        <line
          style={{fill:'none',stroke:'#b42529',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px'}}
          x1="328"
          x2="320"
          y1="176"
          y2="400"
        />
      </svg>
    )
}