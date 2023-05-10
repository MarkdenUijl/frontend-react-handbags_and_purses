import React from 'react';
import './App.css';
import Button from "./components/Button/Button";
import Product from "./components/Product/Product";
import Tile from "./components/Tile/Tile";
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import story from "./assets/our_story.png";

function App() {

    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    textValue="to the collection"
                    disbledValue={ false }
                ></Button>

                <Button
                    textValue="shop all bags"
                    disbledValue={ false }
                ></Button>

                <Button
                    textValue="pre-orders"
                    disbledValue={ true }
                ></Button>
            </nav>

            <main>
                <Product
                    bannerText="Best seller"
                    image={bag_1}
                    description="The handy bag"
                    price="400"
                ></Product>

                <Product
                    bannerText="Best seller"
                    image={bag_2}
                    description="The stylish bag"
                    price="250"
                ></Product>

                <Product
                    bannerText="New collection"
                    image={bag_3}
                    description="The simple bag"
                    price="300"
                ></Product>

                <Product
                    bannerText="New collection"
                    image={bag_4}
                    description="The trendy bag"
                    price="150"
                ></Product>
            </main>

            <footer>
                <Tile>
                    <h2>the brand</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur beatae consequuntur debitis deleniti dicta fugiat harum iusto labore nesciunt numquam, officia pariatur provident quas totam ut velit voluptate voluptatem!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis eaque error fugit ipsa itaque nulla repellendus. Ea tempore, vitae!
                    </p>
                </Tile>

                <Tile image={brand}></Tile>

                <Tile image={story}></Tile>

                <Tile>
                    <h2>our story</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem error ipsam quasi sit. Assumenda at beatae consequatur nemo officia, porro! Illo iste mollitia quae sequi voluptates? Beatae debitis dolorem dolores ea earum esse exercitationem expedita, illo impedit magni molestias nihil nulla numquam obcaecati odit, quam sapiente ullam vitae voluptate voluptates!
                    </p>
                </Tile>
            </footer>
        </>
    );
}

export default App;



