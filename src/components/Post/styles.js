import styled from 'styled-components/native';

export const Container = styled.Pressable`
  margin: 20px;
`;

export const Image = styled.Image`
  width: 100%;
  height: auto;
  aspect-ratio: ${3 / 2};
  resize-mode: cover;
  border-radius: 10px;
`;

export const BedroomsText = styled.Text`
  margin-vertical: 10px;
  color: #5b5b5b;
`;

export const Description = styled.Text`
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 5px;
`;

export const Prices = styled.Text`
  font-size: 18px;
`;

export const OldPrices = styled.Text`
  color: #5b5b5b;
  text-decoration-line: line-through;
`;
export const Price = styled.Text`
  font-weight: bold;
`;

export const TotalPrice = styled.Text`
  color: #5b5b5b;
  text-decoration-line: underline;
`;
