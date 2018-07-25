import React, { Component } from 'react';
import { TouchableOpacity , View ,Image , ScrollView} from 'react-native';
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
  padding-top: 30;
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
  font-size:30;
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
      <ScrollView>
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
              <Image source={require('../../../assets/98.jpg')} />  
          </View>
          <SummaryCreditsText>Is a folkloric dance that is popular in the Levant and represents the folklore of those countries.
           Often practiced in festivals and weddings. The Dabkeh group consists of a group of more than ten people, dubbing a dibak, a yargul player, a bar and a drum.</SummaryCreditsText>
          <SummaryCreditsText>{}</SummaryCreditsText>
        </SummaryContainer>

        
        <SummaryContainer>
          <SummaryHeader>{'Falafel'}</SummaryHeader>
          <View>
              <Image source={require('../../../assets/falafel.jpg')} />  
          </View>
          <SummaryCreditsText>Falafel or felafel  dialectal: [fæˈlæːfel]) is a deep-fried ball, doughnut or patty made from ground chickpeas, fava beans, or both. Falafel is a traditional Middle Eastern food, that most likely originated in Egypt.It is commonly served in a pita, which acts as a pocket, or wrapped in a flatbread known as taboon; "falafel" also frequently refers to a wrapped sandwich that is prepared in this way. The falafel balls are laid over a bed of salads, pickled vegetables, hot sauce, and drizzled with tahini-based sauces. Falafel balls may also be eaten alone as a snack or served as part of a meze (assortment of appetizers).
          Falafel is a common food eaten in the Middle East. The fritters are now found around the world as a replacement for meat and a form of street food. </SummaryCreditsText>
          <SummaryCreditsText>{}</SummaryCreditsText>
        </SummaryContainer>


        <SummaryContainer>
          <SummaryHeader>{'knafa'}</SummaryHeader>
          <View>
              <Image source={require('../../../assets/knafa.jpg')} />  
          </View>
          <SummaryCreditsText>is a traditional Arabic dessert made with thin shredded or noodle-like pastry soaked in sweet, sugar-based syrup, and typically layered with cheese, or with other ingredients such as clotted cream or nuts, depending on the region.It is popular in the Arab world, particularly the Levant and Egypt,and especially in Palestine.In addition, variants are found in Turkey, Greece, and the Balkans,as well as in the Caucasus. </SummaryCreditsText>
          <SummaryCreditsText>{}</SummaryCreditsText>
        </SummaryContainer>
        </ScrollView>
      </Container>
    );
  }
}


export default CulturePage;
