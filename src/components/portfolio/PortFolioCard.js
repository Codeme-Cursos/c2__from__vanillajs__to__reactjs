import React from 'react'

const PortFolioCard = ({ src, title, text, buttonText, openClick, closeClick, modalId, modalTitle, modalText }) => {

    const hideModalPressingOutside = (e) => {
        const modal = document.getElementById(e.target.id);
        if (modal && modal.contains(e.target)) {
            modal.style.display = "none"
        }
    }

    return (
        <div className="portfolio__cards__item">
            <img src={src} alt="Not Found" />
            <div className="portfolio__cards__item__body">
                <h4>{title}</h4>
                <p>{text}</p>
                <button onClick={() => openClick(modalId)}>{buttonText}</button>
                {/* The Modal */}
                <div id={modalId} className="modal" onClick={hideModalPressingOutside}>
                    {/* Modal content */}
                    <div className="modal-content">
                        <span className="close" onClick={() => closeClick(modalId)}>×</span>
                        <p>{modalTitle}</p>
                        <p>{modalText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortFolioCard
