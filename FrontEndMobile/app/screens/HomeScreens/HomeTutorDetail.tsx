import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ButtonCustom from "../../Components/ButtonCustom";
import ReviewCard from "../../Components/ReviewCard";
import ModalReview from "../../Components/ModalReview";

const HomeTutorDetail = ({ navigation, route }) => {
  const [img, setImg] = React.useState(
    require("../../../assets/img/Anya.jpg")
  );
  const [name, setName] = React.useState("Anya");
  const [subject, setSubject] = React.useState("Math");
  const [price, setPrice] = React.useState(200);
  const [rating, setRating] = React.useState(4.5);

  useEffect(() => {
    const subObj = route.params.subObj;
    const { idAcc, title, rating, price, lesson } = subObj;
    setName(idAcc);
    setSubject(title);
    setPrice(price);
    setRating(rating);
  }, []);
  //imgIcon
  const imgIcon = {
    fb: require("../../../assets/icons/facebook_icon.png"),
    line: require("../../../assets/icons/line_icon.png"),
    instagram: require("../../../assets/icons/instagram_icon.png"),
  };

  return (
    <ScrollView>
      <View style={styles.imgPosition}>
        <Image style={styles.img} source={img}></Image>
      </View>
      <View style={styles.textSpace}>
        <Text style={[styles.text]}>{name}</Text>
        <Text style={[styles.text, { color: "#4CA771" }]}>{subject}</Text>
        <Text style={[styles.text, { color: "#0487FF" }]}>{price} THB/HR</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 30,
        }}
      >
        <View style={styles.rating}>
          <Image
            style={{ height: 25 }}
            source={require("../../../assets/icons/star.png")}
            resizeMode="contain"
          />
          <Text style={[styles.text, { color: "#fff", fontWeight: "normal" }]}>
            {rating}
          </Text>
        </View>
      </View>
      <View style={styles.infoSection}>
        <View style={styles.contactPosition}>
          <Image style={styles.iconImg} source={imgIcon.fb}></Image>
          <Image style={styles.iconImg} source={imgIcon.line}></Image>
          <Image style={styles.iconImg} source={imgIcon.instagram}></Image>
        </View>
        <ButtonCustom title="ดูประวัติ"></ButtonCustom>
      </View>
      <View
        style={[
          styles.textSpace,
          { paddingTop: 20, width: "75%", flexWrap: "wrap" },
        ]}
      >
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold", paddingBottom: 10 }}>
            แนะนำตัว
          </Text>
        </View>
        <View>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Elit egestas urna
            consectetur mus amet a. Tellus risus id id{" "}
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.textSpace,
          {
            marginRight: 20,
            paddingTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          },
        ]}
      >
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold", paddingBottom: 10 }}>
            รีวิวผู้สอน
          </Text>
        </View>
        <ModalReview title="เขียนรีวิว"/>
      </View>
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>
    </ScrollView>
  );
};
export default HomeTutorDetail;

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
    borderRadius: 90,
  },
  reviewImg: {
    width: 70,
    height: 70,
    borderRadius: 90,
  },
  imgPosition: {
    alignItems: "center",
    paddingVertical: 40,
  },
  rating: {
    width: 70,
    height: 30,
    marginTop: 10,
    backgroundColor: "#000",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#000",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "800",
    fontSize: 18,
  },
  textSpace: {
    paddingLeft: 30,
  },
  contactPosition: {
    paddingLeft: 30,
    marginTop: 5,
    gap: 10,
    flexDirection: "row",
  },
  iconImg: {
    width: 30,
    height: 30,
  },
  button: {
    width: "40%",
    justifyContent: "center",
    padding: 10,
    marginRight: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
  },
  infoSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    marginRight: 20,
  },
  reviewBorder: {
    width: "80%",
    marginLeft: 20,
    marginRight: 30,
    borderBottomWidth: 2,
    borderBlockColor: "black",
  },
});
