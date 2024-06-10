import'./info.css'

function close() {
const close = document.getElementById('forClose')
close.className = 'hide'
}

export function Info() {
    return (
        <div id='forClose' className="info-block">
        <p className="infoText">New to Udemy? Learning leads to opportunity <span className='info-desc'>| Shop now to get an exclusive offer: Courses from €14.99.</span></p>
        <p className="infoText">Ends   <span className='info-date'>12.06.2024</span></p>
        <button className='closeButton' onClick={close}>x</button>
        </div>
    )
}