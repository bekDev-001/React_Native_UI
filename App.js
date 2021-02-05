import React from 'react';
import {StatusBar} from 'react-native'
import styled from 'styled-components/native'
import Icon from '@expo/vector-icons/AntDesign'
import IIcon from '@expo/vector-icons/Ionicons'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function App() {
    return (
        <Container>
            <StatusBar barStyle='ligh-contenet'/>
              <SafeAreaView>
                <View>
                  <Image source={require('./assets/a.jpg')}/>
                </View>
                <MenuBar>
                  <Back>
                    <Icon name='arrowleft' size={24} color="black" />
                    {/* <Text style={{marginLeft:10}} >Ingredients</Text> */}
                  </Back>
                  <Icon name='heart' size={24} color="red" />
                </MenuBar>
                <MainRecipe>
                  <Text title heavy >Tojiboyev Bekzod</Text>
                  <Divider />
                  <Text style={{fontSize:35, color: 'whitesmoke',fontFamily:'arail'}}>Software Developer</Text>
                </MainRecipe>
                <ButtonsV>
                  <Button to={'/'}>
                    <Text bold small>About Me</Text>
                  </Button>
                  <Button>
                    <Text bold small>My Team</Text>
                  </Button>
                 </ButtonsV>
              </SafeAreaView>
            <RecipesContainer>
              <Block>
                <IIcon name="location-outline" size={35} color="black" />
                <Div>Fergana Region Bagdad District</Div>
              </Block>
              <DividerHr />

              <Block>
                <Feather name="mail" size={35} color="black" />
                <Div>bekzodjonTojiboyev@gmail.com</Div>
              </Block>
              <DividerHr />

              <Block>
                <Feather name="phone" size={35} color="black" />
                <Div>+99833 001 30 43</Div>
              </Block>
              <DividerHr />

              <Block>
                <FontAwesome name="building-o" size={35} color="black" />
                <Div>Our Office: Rishtan District</Div>
              </Block>
              <DividerHr />
              
              <Recipes></Recipes>
            </RecipesContainer>
        </Container>
    );
}

const Container = styled.View`
        flex: 1;
 `;

 const SafeAreaView = styled.View`
        background-color: teal;
        width: 100%;
        height: auto;
 `;

 const ButtonsV = styled.View`
   flex-direction: row;
   font-family: arial;
     
`;

const View = styled.View`
// flex-direction: row;
// font-family: arial;
  
`;

const Block = styled.View`
  flex-direction: row;
`;

const Div = styled.Text `
   font-size:22px;
   margin-top: 4px;
   margin-left: 30px;
`;

const DividerHr = styled.View `
   border-bottom-color: gray;
   border-bottom-width: 1px;
   width: 400px;
   margin: 29px 30px;
`;

 const Image = styled.Image `
    margin: 20px 50px 0px 190px;
    width: 150px;
    height: 150px;
    position: absolute;
    borderRadius: 55;
    marginRight: 100px;
 `;
 const Text = styled.Text `
    color:${(props) => (props.dark
    ? "#000"
    : "white")}
    font-family: "san-serif";
    ${ ({
      title,
      large,
      small}) => {
        switch (true) {
          case title:
            return "font-size: 32px";
          case large:
            return "font-size: 20px";
          case small:
            return "font-size: 18px";
        }
      }}

  ${ ({
    bold,
    heavy}) => {
      switch (true) {
        case bold:
           return "font-weight: 900", "font-family: Arial";
        case heavy:
           return "font-weight: 700";
         }
   }}
 `;


const MenuBar = styled.View `
   flex-direction: row;
   justify-content: space-between;
   padding: 16px;
`;

const Back = styled.View `
   flex-direction: row;
   align-items: center;
`;

const MainRecipe = styled.View `
   padding: 0 32px;
   margin: 150px 0 32px;
`;

const Divider = styled.View `
   border-bottom-color: #fff;
   border-bottom-width: 2px;
   width: 250px;
   margin: 8px 0;
`;

const Button = styled.TouchableOpacity `
   float: left;
   margin: 0 0 68px 32px;
   background-color: rgb(218, 103, 50);
   align-self: flex-start;
   padding: 10px 28px;
   border-radius: 100px;
`;

const RecipesContainer = styled.View `
   margin-top: -24px;
   padding: 32px;
   background-color: #fff;
   border-top-left-radius: 25px;
   border-top-right-radius: 25px;
`;
const Recipes = styled.View `
   margin-top: 16px;
`;