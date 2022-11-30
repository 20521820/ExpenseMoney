import React, { useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  FlatList,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

// import SlidingPanel from 'react-native-sliding-up-down-panels';
// SLIDING PANEL

// const [dragRange,setDragRange] = useState({
//   top:height - 80,
//   bottom: 160
// })

const _draggedValue = new Animated.Value(180);

const Transactions = [
  {
    id: "1",
    transactionImage:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    transactionName: "Shopping",
    transactionDate: "25 April 20",
    amount: "$350",
    description: "Buy some grocery",
  },
  {
    id: "2",
    transactionImage:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    transactionName: "Subcription",
    transactionDate: "25 April 20",
    amount: "$350",
    description: "Buy some grocery",

  },
  {
    id: "3",
    transactionImage:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    transactionName: "Food",
    transactionDate: "25 April 20",
    amount: "$350",
    description: "Buy some grocery",

  },
  {
    id: "4",
    transactionImage:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    transactionName: "Income",
    transactionDate: "25 April 20",
    amount: "$350",
    description: "Buy some grocery",

  },
  // {
  //   id: "5",
  //   transactionImage:
  //     "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //   transactionName: "Jessica",
  //   transactionDate: "25 April 20",
  //   amount: "$350",
  //   credit: true,
  // },
  // {
  //   id: "6",
  //   transactionImage:
  //     "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //   transactionName: "Jessica",
  //   transactionDate: "25 April 20",
  //   amount: "$350",
  //   credit: true,
  // },
];

const Home = () => {
  const { width, height } = Dimensions.get("window");
  const carouselRef = useRef(null);
  const [viewMode, setViewMode] = useState("today");

  // SLIDING PANEL

  const ModalRef = useRef(null);

  return (
    <View style={styles.container}>
      <View>
        <LinearGradient
          colors={["#F9D48D", "#F8EDD8"]}
          style={styles.linearGradient}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: "#353535",
                  textTransform: "uppercase",
                }}
              >
                Monday 9
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#353535",
                  opacity: 0.6,
                  textTransform: "uppercase",
                }}
              >
                november
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                }}
                style={styles.ProfileImage}
              />
              <Text style={{ textTransform: "uppercase", paddingLeft: "10px" }}>
                Vihnu
              </Text>
            </View>
          </View>
          <Text style={{ textAlign: "center", opacity: 0.7 }}>
            Acount balance
          </Text>
          <Text
            style={{
              fontSize: "34px",
              fontWeight: "700",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            $9400
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "10px",
              paddingBottom: "15px",
            }}
          >
            <View
              style={{
                backgroundColor: "#00A86B",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: 25,
                color: "#fff",
                padding: "15px",
              }}
            >
              <Text style={{ padding: 10 }}>
                <Icon name="download" size={30} color="#fff" />
              </Text>
              <View>
                <Text style={{ color: "#fff", fontSize: 20 }}>Income</Text>
                <Text style={{ color: "#fff", fontSize: 24, fontWeight: 600 }}>
                  25000
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#FD3C4A",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: 25,
                color: "#fff",
                padding: "15px",
              }}
            >
              <Text style={{ padding: 10 }}>
                <Icon name="upload" size={30} color="#fff" />
              </Text>
              <View>
                <Text style={{ color: "#fff", fontSize: 20 }}>Espence</Text>
                <Text style={{ color: "#fff", fontSize: 24, fontWeight: 600 }}>
                  112000
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px",
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                backgroundColor:
                  viewMode == "today" ? "#353535" : "transparent",
                color: viewMode == "today" ? "#FFFFFF" : "#353535",
                padding: 5,
                paddingHorizontal: 15,
                borderRadius: 15,
                fontSize: 16,
                fontWeight: 500,
              }}
              onPress={() => setViewMode("today")}
            >
              Today
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                backgroundColor: viewMode == "week" ? "#353535" : "transparent",
                color: viewMode == "week" ? "#FFFFFF" : "#353535",
                padding: 5,
                paddingHorizontal: 15,
                borderRadius: 15,
                fontSize: 16,
                fontWeight: 500,
              }}
              onPress={() => setViewMode("week")}
            >
              {" "}
              Week
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                backgroundColor:
                  viewMode == "month" ? "#353535" : "transparent",
                color: viewMode == "month" ? "#FFFFFF" : "#353535",
                padding: 5,
                paddingHorizontal: 15,
                borderRadius: 15,
                fontSize: 16,
                fontWeight: 500,
              }}
              onPress={() => setViewMode("month")}
            >
              {" "}
              Month
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                backgroundColor: viewMode == "year" ? "#353535" : "transparent",
                color: viewMode == "year" ? "#FFFFFF" : "#353535",
                padding: 5,
                paddingHorizontal: 15,
                borderRadius: 15,
                fontSize: 16,
                fontWeight: 500,
              }}
              onPress={() => setViewMode("year")}
            >
              {" "}
              Year
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{flex: 1}}>
            <SlidingUpPanel 
            
            draggableRange={dragRange}
            animatedValue={_draggedValue}
            backdropOpacity={0}
            snappingPoints={[360]}
            height={height + 20}
            friction={0.9}
            >

            <View style={{flex: 1, backgroundColor: '#0c0c0c', borderRadius: 24, padding: 14}}>
              <View ></View>
              <View>
                <Text style={{marginVertical: 16, color: '#fff'}}>Recent Transactions</Text>
              </View>

             
             

            </View>
            </SlidingUpPanel>
        </View> */}
        <Text style={{marginVertical: 10, color: '#353535', fontSize:16, fontWeight:600}}>Recent Transactions</Text>
        <View>
        <FlatList
        data={Transactions}
        
        keyExtractor={item => item.id}
        renderItem={({item})=>{
          return(
            <View >
              <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between', padding:'10px'}}>
                <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center',}}>
                <Image
               source={{uri: item.transactionImage}}
                style={styles.TransactionImage}
              />
              <View >
                <Text style={{fontSize:20, fontWeight:600}}>{item.transactionName}</Text>
                <Text style={{fontSize:14, opacity:0.6}}>{item.description}</Text>
              </View>
                </View>
              
              <View>
                <Text style={{fontSize:18, fontWeight:600}}>{item.amount}</Text>
                <Text>{item.transactionDate}</Text>
              </View>

              </View>
            </View>
          )
        }}
      />

        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 0,
    width: "100%",
    height: "95%",
  },
  linearGradient: {
    flex: 1,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 5,
    // width: "100%",
    // height: "95%",
  },
  ProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 40,
    padding: 10,
  },
  TransactionImage:{
    width: 50,
    height: 50,
    borderRadius:10,
    padding: 10,
    marginRight:10

  }
});

export default Home;
