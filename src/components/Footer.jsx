import './Footer.css' 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Brooklyn Stoop Sale. All Rights Reserved.</p>
                <p>Follow us on:</p>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
