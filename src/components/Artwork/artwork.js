import styled from 'styled-components';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ArtBody, ArtCon, ArtPanel, ArtH3, ArtPanelActive, ArtH3Active } from './artworkStyles.js';





const Artwork = () => (
    <Section id="artwork">

        <SectionTitle>My Artwork</SectionTitle>
        <SectionText>
            This is just some of my digital art to show some more of my creative side.
        </SectionText>

        <ArtBody>
            <ArtCon>
                <ArtPanel className="" style={{ backgroundImage: `url(../../images/myart/Churchill-1.jpg)` }} >
                    <ArtH3>Churchill</ArtH3>
                </ArtPanel>
                <ArtPanel className="" style={{ backgroundImage: `url(../../images/myart/Bull-moose.jpg)` }} >
                    <ArtH3>Teddy</ArtH3>
                </ArtPanel>
                <ArtPanel className="" style={{ backgroundImage: `url(../../images/myart/chilly-1.jpg)` }} >
                    <ArtH3>Tundra</ArtH3>
                </ArtPanel>
                <ArtPanel className="" style={{ backgroundImage: `url(../../images/myart/Dark-forest.jpeg)` }} >
                    <ArtH3>Luna</ArtH3>
                </ArtPanel>
                <ArtPanel className="" style={{ backgroundImage: `url(../../images/myart/Matthews-1.jpg)` }} >
                    <ArtH3>Matthews</ArtH3>
                </ArtPanel>
                <ArtPanel className="" style={{ backgroundImage: `url(../../images/myart/Maul-1.JPG)` }} >
                    <ArtH3>Maul</ArtH3>
                </ArtPanel>
                <ArtPanel className="" style={{ backgroundImage: `url(../../images/myart/northernlights-1.jpg)` }} >
                    <ArtH3>Friends</ArtH3>
                </ArtPanel>
                <ArtPanel className="" style={{ backgroundImage: `url(../../images/myart/Perry-1.jpg)` }} >
                    <ArtH3>Katy Perry</ArtH3>
                </ArtPanel>
                <ArtPanel className="" style={{ backgroundImage: `url(../../images/myart/squamish-1.JPG)` }} >
                    <ArtH3>Squamish</ArtH3>
                </ArtPanel>
                <ArtPanel className="" style={{ backgroundImage: `url(../../images/myart/Void-1.jpg)` }} >
                    <ArtH3>The Void</ArtH3>
                </ArtPanel>
                <ArtPanel className="" style={{ backgroundImage: `url(../../images/myart/Blossoms-1.jpg)` }} >
                    <ArtH3>Peach Blossoms</ArtH3>
                </ArtPanel>
            </ArtCon>
        </ArtBody>


        <SectionDivider colorAlt />
    </Section>
);

export default Artwork;