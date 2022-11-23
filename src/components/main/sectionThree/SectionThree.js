import Styles from "../../../styles/App.module.scss";
import imgOne from "../../../assets/desktop/ivt1.png";
import imgTwo from "../../../assets/desktop/ivt2.png";
import imgThree from "../../../assets/desktop/ivt3.png";
import imgFour from "../../../assets/desktop/image-gallery-milkbottles.png";
import imgFive from "../../../assets/desktop/image-gallery-orange.png";
import imgSix from "../../../assets/desktop/image-gallery-cone.png";
import imgSeven from "../../../assets/desktop/image-gallery-sugarcubes.png";
import DataJson from "../../../data/data.json";

const SectionThree = () => {
    const dataSectionThree = DataJson.sectionThreeComponent;
    return (
        <section>
            <div className={Styles.sectionThree_container}>
                <h3 className={Styles.uppercase}>{dataSectionThree.title}</h3>
                <div className={Styles.sectionThree_container_bloc}>
                    <div>
                        <img src={imgOne} alt="emily" />
                        {/*    <div>
                            <p>{dataSectionThree.blocOne.paragraph}</p>
                        </div> */}
                        <h4>{dataSectionThree.blocOne.name}<br /><span className={Styles.sectionThree_container_bloc_text}>{dataSectionThree.blocOne.job}</span></h4>
                    </div>
                    <div>
                        <img src={imgTwo} alt="thomas" />
                        {/*  <div>
                            <p>{dataSectionThree.blocTwo.paragraph}</p>
                        </div> */}
                        <h4>{dataSectionThree.blocTwo.name}<br /><span className={Styles.sectionThree_container_bloc_text}>{dataSectionThree.blocTwo.job}</span></h4>
                    </div>
                    <div>
                        <img src={imgThree} alt="jennie" />
                        {/*  <div>
                            <p>{dataSectionThree.blocThree.paragraph}</p>
                        </div> */}
                        <h4>{dataSectionThree.blocThree.name}<br /><span className={Styles.sectionThree_container_bloc_text}>{dataSectionThree.blocThree.job}</span></h4>
                    </div>
                </div>
            </div>
            <div className={Styles.sectionThree_container_bis}>
                <img src={imgFour} alt="milkbottles" />
                <img src={imgFive} alt="orange" />
                <img src={imgSix} alt="cone" />
                <img src={imgSeven} alt="sugarcubes" />
            </div>
        </section>
    )
}

export default SectionThree;