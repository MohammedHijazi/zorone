import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
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
`;

const TitleText = styled.Text`
  color: ${COLORS.WHITE.WHITE};
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
`;

const SummaryCreditsText = styled.Text`
  color: ${COLORS.GREY.BLACK_RUSSIAN};
  margin-top: 5;
`;

const HeaderContainer = styled.View`
`;

const ImageHeader = styled.Image`
  width: 100%;
  height: 150;
  margin-top: 10;
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

          <ImageHeader source={params.image} resizeMode={'contain'} />
          

        </HeaderContainer>
        <TitleContainer>
          <TitleText>{params.title}</TitleText>
          <TouchableOpacity onPress={() => {}}>
          </TouchableOpacity>
        </TitleContainer>

        
        <SummaryContainer>
          <SummaryHeader>{'Summary'}</SummaryHeader>
          <SummaryText>{params.summary}</SummaryText>
          <SummaryCreditsText>{'Starring: '}{params.starring}</SummaryCreditsText>
          <SummaryCreditsText>{'Creator: '}{params.creator}</SummaryCreditsText>
        </SummaryContainer>
      </Container>
    );
  }
}


export default CulturePage;