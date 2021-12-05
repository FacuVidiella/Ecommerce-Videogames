import styled from "styled-components";

const StyledDeleteReview = styled.div`
display: flex;
flex-direction: column;
padding: 1em;

.message  {
    display: flex;
    align-items: center;
    position: absolute;
    height: 13em;
    width: 32em;
    text-transform: uppercase;
    justify-content: space-around;

    & p {
        margin: 0;
    }
}
.content{
    filter: blur(3px) grayscale(1);
    height: 100%;
    width: 100%;
}

hr{
    background-color: #c8830bbd ;
    filter: blur(3px) grayscale(1);
  }


.data{
    display: flex;
    align-items: center;
    justify-content: space-around;
    filter: blur(3px) grayscale(1);
    

    & p {
        margin: 0
    }
}

`
export default StyledDeleteReview