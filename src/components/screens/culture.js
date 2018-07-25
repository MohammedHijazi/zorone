import React, { Component } from 'react';
import { TouchableOpacity , View ,Image } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from 'constants/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';



const Container = styled.View`
  background-color: ${COLORS.GREY.BLACK_RUSSIAN};
  height: 100%;
`;

const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10;
  padding-left: 10;
  padding-bottom: 10;
  padding-left:120;
`;

const TitleText = styled.Text`
  color: ${COLORS.WHITE.WHITE};
  font-size:30;
`;

const SummaryContainer = styled.View`
  background-color: ${COLORS.GREY.BRIGHT_GREY};
  padding-top: 10;
  padding-right: 10;
  padding-left: 10;
  padding-bottom: 10;
`;

const SummaryText = styled.Text`
  color: ${COLORS.WHITE.WHITE};
`;

const SummaryHeader = styled(SummaryText)`
  margin-bottom: 15;
  padding-left:150;
`;

const SummaryCreditsText = styled.Text`
  color: ${COLORS.GREY.BLACK_RUSSIAN};
  margin-top: 5;
`;


const ImageHeader = styled.Image`
  width: 100%;
  height: 150;
  margin-top: 10;
`;


const DabkaImage = styled.Image`
  padding-left:35;
`;


const HeaderContainer = styled.View`

`;


const BackIconContainer = styled.View`
  margin-top: 10;
  margin-left: 10;
`;

const PlayIconContainer = styled.View`
  margin-left: 10;
`;


const MyListButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90;
  height: 30;
  background-color: ${COLORS.GREY.BRIGHT_GREY};
  margin-right: 10;
`;

const MyListButtonText = styled.Text`
  color: ${COLORS.WHITE.WHITE};
  margin-left: 5;
`;

class CulturePage extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <HeaderContainer>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <BackIconContainer>
              <Icon name={'arrow-left'} size={30} color={COLORS.WHITE.WHITE} />
            </BackIconContainer>
          </TouchableOpacity>
        </HeaderContainer>


        <TitleContainer>
          <TitleText>Gaza Culture</TitleText>
        </TitleContainer>

        
        <SummaryContainer>
          <SummaryHeader>{'Dabka'}</SummaryHeader>
          <View>
              <Image source={require('../../../assets/Dabka.jpg')} />  
          </View>
          <SummaryCreditsText>Is a folkloric dance that is popular in the Levant and represents the folklore of those countries.
           Often practiced in festivals and weddings. The Dabkeh group consists of a group of more than ten people, dubbing a dibak, a yargul player, a bar and a drum.</SummaryCreditsText>
          <SummaryCreditsText>{}</SummaryCreditsText>
        </SummaryContainer>


      </Container>
    );
  }
}


export default CulturePage;
