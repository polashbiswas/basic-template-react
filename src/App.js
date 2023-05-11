import React from "react";
// import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";


let section_data = [
    { title: "Skills", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptate fuga sed impedit saepe doloremque perferendis dolores veniam cum natus cupiditate ad, neque ratione corrupti a, blanditiis eaque dolor. Aut quasi ratione, ea autem voluptas est, perferendis ad iure aperiam eveniet, doloremque error aspernatur ipsam? Voluptates, ullam rerum! Ipsum, temporibus." },

    { title: "Education", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptate fuga sed impedit saepe doloremque perferendis dolores veniam cum natus cupiditate ad, neque ratione corrupti a, blanditiis eaque dolor. Aut quasi ratione, ea autem voluptas est, perferendis ad iure aperiam eveniet, doloremque error aspernatur ipsam? Voluptates, ullam rerum! Ipsum, temporibus." },

    { title: "Experience", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptate fuga sed impedit saepe doloremque perferendis dolores veniam cum natus cupiditate ad, neque ratione corrupti a, blanditiis eaque dolor. Aut quasi ratione, ea autem voluptas est, perferendis ad iure aperiam eveniet, doloremque error aspernatur ipsam? Voluptates, ullam rerum! Ipsum, temporibus." },

    { title: "Projects", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptate fuga sed impedit saepe doloremque perferendis dolores veniam cum natus cupiditate ad, neque ratione corrupti a, blanditiis eaque dolor. Aut quasi ratione, ea autem voluptas est, perferendis ad iure aperiam eveniet, doloremque error aspernatur ipsam? Voluptates, ullam rerum! Ipsum, temporibus." },

    { title: "Contact", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptate fuga sed impedit saepe doloremque perferendis dolores veniam cum natus cupiditate ad, neque ratione corrupti a, blanditiis eaque dolor. Aut quasi ratione, ea autem voluptas est, perferendis ad iure aperiam eveniet, doloremque error aspernatur ipsam? Voluptates, ullam rerum! Ipsum, temporibus." },

]

const App = () => {
    return (
        <div>
            <Navbar />
            <About>
                <hr />
            </About>
            {
                section_data.map((data, index) =>
                (
                    <Section
                        title={data.title}
                        content={data.content}
                    >
                        {index !== section_data.length-1? <hr />: ""}
                    </Section>
                )
                )
            }
        </div>
    );
}

export default App;