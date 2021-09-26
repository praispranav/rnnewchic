import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;

export const spaceHeight = deviceHeight - 375 - 45;
export const ThemeColorPink = "rgb(6, 122 ,197)";
export const GradientColor = ['#42a5f5',"#0d47a1" ];

export const Widthonepercent = deviceWidth/100
export const Heightonepercent = deviceHeight/100
export const halfWidth = deviceWidth - deviceWidth / 2;


export const styles = StyleSheet.create({
  marginTop: {
    marginTop: 15,
  },
  paddingHorizontal: {
    paddingHorizontal: 10,
  },
  paddingVertical: {
    paddingTop: 18,
    paddingBottom: 10,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  space_between: {
    justifyContent: "space-between",
  },
  alignCenter: {
    alignItems: "center",
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  logo: {
    width: 30,
    height: 30,
  },
  bgWhite: {
    backgroundColor: "white",
  },
  heading: {
    fontSize: 24,
  },
  pink: {
    color: ThemeColorPink,
  },
  borderRounded: {
    borderRadius: 30,
  },
  bgGrey: {
    backgroundColor: "#e0e0e0",
  },
  searchButton: {
    paddingHorizontal: 8,
    width: halfWidth - 5,
    height: 33,
  },
  smallLogo: {
    width: 20,
    height: 20,
  },
  textField: {
    width: halfWidth - 88,
  },
  textField2: {
    width: halfWidth,
  },
  borderBottom: {
    borderBottomWidth: 2,
    borderColor: "black",
  },
  paddingBottomSmall: {
    paddingBottom: 7,
    paddingHorizontal: 8,
  },
  bannerImage: {
    width: deviceWidth,
    height: 180,
    // marginVertical: 10,
  },
  category: {
    backgroundColor: "#B4DBF7",
    width: deviceWidth / 4 - 20,
    height: deviceWidth / 4 - 20,
    borderRadius: 500,
    marginHorizontal: 5,
    marginTop: 15,
  },
  marginBottom: {
    marginBottom: 10,
  },
  categoryImage: {
    width: 50,
    height: 50,
  },
  justifyCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  flexColumn: {
    display: "flex",
  },
  marginVertical: {
    marginVertical: 10,
  },
  discountbanner: {
    width: deviceWidth,
    height: 200,
  },
  newArrival: {
    backgroundColor: "#B4DBF7",
    width: halfWidth - 15,
    height: 100,
    padding: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  boldText: {
    fontSize: 16,
  },
  normalText: {
    fontSize: 15,
  },
  newArrivalImage: {
    width: 60,
    height: 60,
  },
  width: {
    width: 20,
  },
  paddingVerticalLarge: {
    paddingVertical: 28,
  },
  marginBottomLarge: {
    marginBottom: 90,
  },
  product: {
    width: halfWidth - 15,
    overflow: "hidden",
    borderColor: "rgb(235,235,235)",
    height: 285,
    marginTop: 8,
  },
  productImage: {
    width: halfWidth - 15,
    height: 230,
  },
  heading2: {
    fontSize: 22,
  },
  bgpink: {
    backgroundColor: ThemeColorPink,
    color: "white",
    marginLeft: 10,
    paddingHorizontal: 3,
    borderRadius: 4,
  },
  line_trough: {
    textDecorationLine: "line-through",
  },
  paddingHorizontalSmall: {
    paddingHorizontal: 8,
  },
  textWhite: {
    color: "white",
  },
  paddingVerticalSmall: {
    paddingVertical: 5,
  },
  marginVerticalSmall: {
    marginVertical: 5,
  },
  textBlack: {
    color: "black",
  },
  backgroundImage: {
    height: 250,
    width: deviceWidth,
  },
  position_relative: {
    position: "relative",
  },
  position_absolute: {
    position: "absolute",
  },
  marginBottom_0: {
    marginBottom: 0,
  },
  top50: {
    top: 180,
    zIndex: 1000,
  },
  heightAuto: {
    height: 500,
  },
  product2: {
    width: deviceWidth / 3 - 16 ,
    overflow: "hidden",
    borderColor: "rgb(235,235,235)",
    marginTop: 13,
    backgroundColor: "white",
    // marginLeft: 10,
  },
  productImage2: {
    width: deviceWidth / 3 - 16,
    height: 170,
  },
  textCenter: {
    textAlignVertical: "center",
    textAlign: "center",
  },
  bgBlack: {
    backgroundColor: "rgba(0,0,0, 0.6)",
  },
  opacity5: {
    opacity: 1,
  },
  top25: {
    top: 80,
    right: 10,
  },
  evenly: {
    justifyContent: "space-evenly",
  },
  fullWidth: {
    width: deviceWidth,
  },
  fullWidth2: {
    width: deviceWidth - 30,
  },
  topLeft: {
    top: 0,
    left: -10,
    borderRadius: 0,

    zIndex: 10000,
  },
  paddingHorizontalLarge: {
    paddingHorizontal: halfWidth - 120,
  },
  borderLeft: {
    borderLeftWidth: 5,
    borderLeftColor: ThemeColorPink,
  },
  categoryWidth: {
    width: deviceWidth >= 350 ? 125 : deviceWidth / 4,
  },
  borderBottomSmall: {
    borderBottomWidth: 0.4,
    borderBottomColor: "lightgrey",
  },
  shadow: {
    shadowColor: `#000`,
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryProductWidth: {
    width: deviceWidth >= 350 ? deviceWidth - 155 : deviceWidth / 4,
  },
  borderRoundedSmall: {
    borderRadius: 3,
    overflow: "hidden",
  },
  shdowSmall: {
    elevation: 4,
  },
  borderRadius_0: {
    borderRadius: 0,
  },
  accountTop: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  marginTopLarge: {
    marginTop: 40,
    // marginBottom: 60,
  },
  profileImage: {
    borderWidth: 2,
    borderColor: "white",
    padding: 2,
    borderRadius: 70,
  },
  bgRed: {
    backgroundColor: "#f44336",
  },
  marginBottomSmall: {
    marginBottom: 7,
  },
  border: {
    borderWidth: .6,
    borderColor: "white",
  },
  marginTop2: {
    marginTop: 30,
  },
  top90: {
    bottom: -20,
    zIndex: 5,
  },
  borderBlack: {
    borderColor: "lightgrey",
    borderWidth: 0.51,
  },
  height50: {
    height: 450,
  },
  padding: {
    padding: 10,
    paddingTop: 0,
  },
  bgpink2: {
    backgroundColor: ThemeColorPink,
  },
  textField3: {
    borderBottomWidth: 2,
    borderColor: "lightgrey",
    marginVertical: 15,
    height: 40,
  },
  paddingHorizontalLarge2: {
    paddingHorizontal: 40,
  },
  marginTop3: {
    marginTop: 30,
  },
  underline: {
    textDecorationLine: "underline",
  },

  border2grey: {
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 4,
  },
  marginHorizontal: {
    marginHorizontal: 10,
  },
  width4: {
    width: 150,
  },
  justifyend: {
    justifyContent: "flex-end",
  },
  text18: {
    fontSize: RFValue(18),
  },
  textgrey: {
    color: "grey",
  },
  paddingTop: {
    paddingTop: 10,
  },
  customerService: {
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    paddingBottom: 15,
  },
  flex1: {
    flex: 1,
  },
  marginVerticalMedium: {
    marginVertical: 8,
  },
  borderBottomSmall2: {
    borderColor: "lightgrey",
    borderBottomWidth: 0.7,
  },
  margin: {
    margin: 8,
  },
  widthhelp: {
    width: 70,
    height: 70,
    margin: 10,
    borderRadius: 90,
  },
  borderRounded: {
    borderRadius: 70,
  },
  top25right0: {
    top: 40,
    right: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  borderRadiusTop: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  borderHeightWidth: {
    borderColor: ThemeColorPink,
    borderWidth: 1.5,
    width: 32,
    height: 32,
  },
  paddingSmallSmall: {
    padding: 2,
  },
  paddingVerticalSame: {
    paddingVertical: 13,
  },
  bglightorange: {
    backgroundColor: "#ffb74d",
  },
  bgdarkorange: {
    backgroundColor: "#fb8c00",
  },
  widthcoupon: {
    width: 110,
    height: 120,
  },
  marginTop4: {
    marginTop: 7,
  },
  textOrangeDark: {
    color: "#e65100",
  },
  widthPointOffer: {
    width: halfWidth - 60,
  },
  bggreen: {
    backgroundColor: "#81c784",
  },
  smalltext:{
    fontSize: 12
  },
  discountBrand:{
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  marginTopSmall:{
    marginTop: 5
  },
  extrasmalltext:{
    fontSize: 10
  },
  paddingHorizontal25:{
    paddingHorizontal: 20
  },
  marginLeft: {
    marginLeft: 17
  },
  border:{
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  textTheme:{
    color: ThemeColorPink
  }
});
