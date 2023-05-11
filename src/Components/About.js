

const About = (props) => {
    return (
        <div className="about">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab assumenda, dolorum eum at a sint corrupti dolorem rem qui velit consequuntur et saepe molestiae odio ex aut quibusdam eveniet molestias?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ut expedita pariatur non eius veniam id. Saepe culpa ipsam, autem modi veniam ducimus doloremque nulla quaerat pariatur harum porro sit.</p>
            {props.children}
        </div>
    )
}

export default About;