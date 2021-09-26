import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles";
import Products from "./Product"

const YouMightAlsoLike = [
  {
    id: 1,
    discountpercentage: 12,
    price: 2000,
    image: require("../assets/images/suit.jpg"),
  },
  {
    id: 2,
    discountpercentage: 12,
    price: 2000,
    image: require("../assets/images/girl.jpg"),
  },
  {
    id: 3,
    discountpercentage: 12,
    price: 2000,
    image: require("../assets/images/girl.jpg"),
  },
  {
    id: 4,
    discountpercentage: 12,
    price: 2000,
    image: require("../assets/images/girl.jpg"),
  },
  {
    id: 5,
    discountpercentage: 12,
    price: 2000,
    image: require("../assets/images/girl.jpg"),
  },
  {
    id: 6,
    discountpercentage: 12,
    price: 2000,
    image: require("../assets/images/girl.jpg"),
  },
  {
    id: 7,
    discountpercentage: 12,
    price: 2000,
    image: require("../assets/images/girl.jpg"),
  },
];

// function Products(props) {
//   const discount = props.price * props.discountpercentage;
//   const percent = discount / 100;
//   const discountedprice = props.price - percent;
//   return (
//     <ButtonFeedBackAndOpacity onPress={() => console.warn("Product Pressed")}>
//       <View style={[styles.product]}>
//         <Image source={props.image} style={styles.productImage} />
//         <View style={[styles.marginVerticalSmall, styles.position_relative]}>
//           <View style={{ position: "absolute", right: 10, zIndex: 100 }}>
//             <TouchableOpacity>
//               <Icon name="heart" size={16} />
//             </TouchableOpacity>
//           </View>
//           {
//               props.discountpercentage ? (
//                   <>
//                 <Text style={[styles.bold, styles.pink, { fontSize: 17 }]}>
//                 <MaterialIcons name="currency-inr" size={18} />
//                 {discountedprice}
//               </Text>
//               <View
//                 style={[styles.flex, styles.alignCenter, { marginVertical: 4 }]}
//               >
//                 <Text
//                   style={[styles.line_trough, styles.textgrey, styles.smalltext]}
//                 >
//                   {" "}
//                   <MaterialIcons name="currency-inr" size={13} />
//                   {props.price}
//                 </Text>
//                 <LinearGradient
//                   colors={GradientColor}
//                   end={{ x: 1, y: 0 }}
//                   start={{ x: 0, y: 1 }}
//                   style={[styles.marginHorizontal]}
//                 >
//                   <Text
//                     style={[
//                       styles.textWhite,
//                       styles.smalltext,
//                       { paddingHorizontal: 4, paddingVertical: 2 },
//                     ]}
//                   >
//                     -{props.discountpercentage} %
//                   </Text>
//                 </LinearGradient>
//               </View>
//               </>
//               ) : (
                  
//                 <Text style={[styles.bold, styles.textBlack, { fontSize: 17 }]}>
//                 <MaterialIcons name="currency-inr" size={18} />
//                 {props.price}
//               </Text>
//               )
//           }
         
//         </View>
//       </View>
//     </ButtonFeedBackAndOpacity>
//   );
// }

export default function YouMightLike() {
  return (
    <View style={styles.marginTop}>
      <View
        style={[
          styles.paddingHorizontal,
          styles.paddingVerticalSmall,
          styles.bgWhite,
        ]}
      >
        <Text style={[styles.paddingVertical, styles.bold]}>
          You Might Also Like
        </Text>
        <View style={[styles.flex, styles.space_between, styles.flexWrap]}>
          {YouMightAlsoLike.map((item) => (
            <Products
              key={item.id}
              icon={"heart"}
              image={item.image}
              price={item.price}
              discountpercentage={item.discountpercentage}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
