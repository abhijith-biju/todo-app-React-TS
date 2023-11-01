import { useState } from 'react';

import Header from './components/Header/Header.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import CoreConcepts from './components/CoreComponents.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(selectedTopic) {
        setSelectedTopic(selectedTopic);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((conceptItem, index) => (
                            <CoreConcepts {...conceptItem} key={index} />
                        ))}
                    </ul>
                </section>
                <section id="examples">
                    <menu>
                        <TabButton
                            isSelected={selectedTopic === 'components'}
                            onSelect={() => handleClick('components')}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'jsx'}
                            onSelect={() => handleClick('jsx')}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'props'}
                            onSelect={() => handleClick('props')}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'state'}
                            onSelect={() => handleClick('state')}
                        >
                            States
                        </TabButton>
                    </menu>
                    {tabContent}

                    {/* Alternative method to conditionally render */}

                    {/* {!selectedTopic && <p>Please select a topic</p>}
                    {selectedTopic && (
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    )} */}
                </section>
            </main>
        </div>
    );
}

export default App;
