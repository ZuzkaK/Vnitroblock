import Hello from '../components/Hello'
import {
    Box,
    Button,
    Heading,
    Text,
    BaseStyles,
} from '@primer/components'


function Home() {
    return <div>
        <BaseStyles>
            <Box m={4}>
                <Heading mb={2}>Hello, Zuz!</Heading>
                <p>This will get Primer text styles.</p>

                <Hello name='Zuz'></Hello>
                <p>
                    <a href="/aboutme">Im Zuz </a>
                </p>
            </Box>
        </BaseStyles>

    </div>;
}

export default Home;

