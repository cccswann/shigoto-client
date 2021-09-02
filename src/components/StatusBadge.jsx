import React from 'react'

var classNames = require('classnames');

const StatusBadge = ({ status }) => {
    let badgeClass = classNames({
                  badge: true,
                  'badge-pill': true,
                  'badge-secondary': status === 'Applied',
                  'badge-success': status === 'Offer',
                  'badge-danger': status === 'Rejected',
                  'mr-3': true
    });
    function styling() {
        if (status === 'Offer') { 
            console.log('Offer!')
            return "{background: 'green';}" 
        }
        else if (status === 'Rejected'){
            return"{background: 'red'}"
        }
    }

    return <span className={badgeClass} style={{background: status === "Offer" ? "green" : status === "Rejected" ? "red" : status === "Interview" ? "blue" : "grey", marginRight: '1rem'}}>{status}</span>
}

// class StatusBadge extends React.Component {


//     render () {
//         var badgeClass = classNames({
//           badge: true,
//           'badge-pill': true,
//           'mr-3': true,
//           'badge-secondary': this.props.status === 'Applied',
//           'badge-success': this.props.status === 'Offer'
//         });
//         return <span className={badgeClass}>{this.props.status}</span>;
//       }
// }

export default StatusBadge;