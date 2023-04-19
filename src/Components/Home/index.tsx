import { Container, Grid, styled } from "@mui/material";

const Wrapper = styled(Grid)(({theme}) => ({
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
}));

function Home() {
	return <Container maxWidth='xl'>
        <Wrapper container>
            
        </Wrapper>
    </Container>
}

export default Home;
