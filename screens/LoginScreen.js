import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Eye, LockKeyhole, Phone } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import calp from "../assets/calp.png";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.arc} />
      <View style={styles.dotCluster}>
        {Array.from({ length: 42 }).map((_, index) => (
          <View key={index} style={styles.dot} />
        ))}
      </View>

      <View style={styles.brand}>
        <View style={styles.logoBox}>
          <Image source={calp} style={styles.image} />
        </View>
        <Text style={styles.home}>LeaveFlow</Text>
        <Text style={styles.leave}>Leave Management System</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputBox}>
          <Phone color="#757b89" size={22} />
          <TextInput
            placeholder="Enter your phone number"
            placeholderTextColor="#8b909b"
            keyboardType="phone-pad"
            style={styles.input}
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputBox}>
          <LockKeyhole color="#757b89" size={22} />
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#8b909b"
            secureTextEntry
            style={styles.input}
          />
          <Eye color="#757b89" size={22} />
        </View>

        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("DashBoard")}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUp}>Don't have an account?  Sign Up</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5a3df0",
    paddingHorizontal: 22,
    overflow: "hidden",
  },
  arc: {
    position: "absolute",
    left: -100,
    top: 150,
    width: 260,
    height: 260,
    borderRadius: 130,
    borderWidth: 26,
    borderColor: "rgba(255,255,255,0.08)",
  },
  dotCluster: {
    position: "absolute",
    right: 30,
    top: 86,
    width: 90,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 9,
    opacity: 0.45,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "rgba(255,255,255,0.45)",
  },
  brand: {
    alignItems: "center",
    marginTop: 112,
  },
  logoBox: {
    width: 102,
    height: 102,
    borderRadius: 26,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  image: {
    height: 62,
    width: 62,
    resizeMode: "contain",
  },
  home: {
    fontSize: 32,
    fontWeight: "800",
    color: "#ffffff",
  },
  leave: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 6,
  },
  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 22,
    marginTop: 52,
    shadowColor: "#2b1aa8",
    shadowOpacity: 0.18,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },
  label: {
    color: "#111827",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
  },
  inputBox: {
    width: "100%",
    minHeight: 60,
    borderRadius: 10,
    borderColor: "#cfd3dc",
    borderWidth: 1,
    marginBottom: 26,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
    color: "#111827",
  },
  forgotButton: {
    alignSelf: "flex-end",
    marginTop: -8,
    marginBottom: 28,
  },
  forgot: {
    color: "#2f23e8",
    fontSize: 15,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#4f31ef",
    width: "100%",
    minHeight: 68,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "800",
    fontSize: 18,
    textAlign: "center",
    color: "#ffffff",
  },
  signUpButton: {
    alignSelf: "center",
    marginTop: 44,
  },
  signUp: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },
});
