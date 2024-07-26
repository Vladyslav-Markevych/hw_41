type initialStateProps = objProps[]
interface objProps {
  id: number,
  name: string
  author: string
  linkVideo: string
  description: string
}


export const initialState:initialStateProps = [
  {
    id: 123123124,
    name: "First Course",
    author: "First Author",
    linkVideo: "https://www.youtube.com/embed/hTWKbfoikeg?si=Q3VaH_R_z3voAbhK",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et, fugiat voluptatibus atque expedita obcaecati optio ullam tenetur! Beatae nulla, illo nemo debitis dolorum voluptatem impedit! Commodi, consequuntur ipsam, blanditiis unde asperiores porro atque error provident ipsa praesentium quod, voluptates quaerat maxime a! Dolore vero ut numquam modi qui vitae expedita placeat repellendus iusto accusantium. Ullam laborum voluptatum, est magnam molestiae autem minima corrupti quidem accusantium cum consequuntur unde porro ex rem commodi iste dolores voluptatem architecto nihil non harum! Sunt reiciendis deleniti eligendi nam dignissimos reprehenderit soluta vitae eaque fugiat amet repudiandae provident aut, ipsam omnis ullam voluptatum inventore",
  },
  {
    id: 543534234,
    name: "second Course",
    author: "second Author",
    linkVideo: "https://www.youtube.com/embed/l482T0yNkeo?si=O7E1-vYSKNN6Vgvg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et, fugiat voluptatibus atque expedita obcaecati optio ullam tenetur! Beatae nulla, illo nemo debitis dolorum voluptatem impedit! Commodi, consequuntur ipsam, blanditiis unde asperiores porro atque error provident ipsa praesentium quod, voluptates quaerat maxime a! Dolore vero ut numquam modi qui vitae expedita placeat repellendus iusto accusantium. Ullam laborum voluptatum, est magnam molestiae autem minima corrupti quidem accusantium cum consequuntur unde porro ex rem commodi iste dolores voluptatem architecto nihil non harum! Sunt reiciendis deleniti eligendi nam dignissimos reprehenderit soluta vitae eaque fugiat amet repudiandae provident aut, ipsam omnis ullam voluptatum inventore",
  },
];

export default initialState;
