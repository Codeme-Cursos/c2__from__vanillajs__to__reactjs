import PortFolioCard from "./PortFolioCard"
import Photo from "../../assets/bici2.jpg"

const PortFolio = () => {

    const openModal = (id) => {
        const modal = document.getElementById(id);
        modal.style.display = "block";
    }

    const closeModal = (id) => {
        const modal = document.getElementById(id);
        modal.style.display = "none";
    }

    return (
        /* Sección de tarjetas de portafolio */
        <div className="portfolio" id="portfolio">
            <h1>Portafolio</h1>
            <div className="portfolio__cards">

                <PortFolioCard
                    src={Photo}
                    title="Título 1"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    buttonText="Visitar"
                    openClick={openModal}
                    closeClick={closeModal}
                    modalId="modal1"
                    modalTitle="Modal 1"
                    modalText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laboriosam suscipit itaque perspiciatis pariatur quisquam."
                />

                <PortFolioCard
                    src={Photo}
                    title="Título 2"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    buttonText="Visitar"
                    openClick={openModal}
                    closeClick={closeModal}
                    modalId="modal2"
                    modalTitle="Modal 2"
                    modalText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laboriosam suscipit itaque perspiciatis pariatur quisquam."
                />

                <PortFolioCard
                    src={Photo}
                    title="Título 3"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    buttonText="Visitar"
                    openClick={openModal}
                    closeClick={closeModal}
                    modalId="modal3"
                    modalTitle="Modal 3"
                    modalText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laboriosam suscipit itaque perspiciatis pariatur quisquam."
                />

                <PortFolioCard
                    src={Photo}
                    title="Título 4"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    buttonText="Visitar"
                    openClick={openModal}
                    closeClick={closeModal}
                    modalId="modal4"
                    modalTitle="Modal 4"
                    modalText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laboriosam suscipit itaque perspiciatis pariatur quisquam."
                />

            </div>
        </div>
    )
}

export default PortFolio
