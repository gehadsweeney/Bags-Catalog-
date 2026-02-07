import './Header.css'

const Header = () => {
return (
    <div className="header">
        <img src="/banar.png" alt="Header banner featuring bags catalog branding and navigation elements" width="100%"/>
        <div className="content">
            <a className="whatsapp-button" href="https://wa.me/+966503863911" target="_blank" rel="noreferrer">
                <img className='button' src="/button.png" alt="WhatsApp contact button"/>
            </a>
            <img src="/wats.png" alt="WhatsApp icon for contact or support" />
        </div>
    </div>
)
}

export default Header