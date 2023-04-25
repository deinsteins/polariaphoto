import AnimatedContainer from "../../../components/animatedContainer";

const Wrapper = ({title, primaryImg, secondaryImg, reverse}) => {
    
    return (
        <div className="flex p-12 mt-12" style={{flexDirection: reverse? "row-reverse" : "row"}}>
            <div className="flex flex-col">
                <img className="h-3/4 w-3/4 m-auto" src={primaryImg} alt="" />
                <h3 className="text-center text-gray-600 text-lg">{title}</h3>
            </div>
            <div>
                <AnimatedContainer>
                    <img src={secondaryImg} alt="" />
                </AnimatedContainer>
            </div>
        </div>
    )
}

export default Wrapper;