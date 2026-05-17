import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CalendarDays, ChevronDown, ChevronLeft } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const leaveBalances = [
  { label: "Annual Leave", value: "18", color: "#4f31ef" },
  { label: "Casual Leave", value: "12", color: "#16a05b" },
  { label: "Sick Leave", value: "08", color: "#f57c00" },
];

function ApplyLeaveScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.82}
        >
          <ChevronLeft color="#ffffff" size={32} />
        </TouchableOpacity>
        <Text style={styles.title}>Apply Leave</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>LEAVE BALANCE</Text>
        <View style={styles.balanceCard}>
          {leaveBalances.map((item, index) => (
            <View key={item.label} style={styles.balanceItem}>
              <Text style={[styles.balanceValue, { color: item.color }]}>
                {item.value}
              </Text>
              <Text style={styles.balanceLabel}>{item.label}</Text>
              {index < leaveBalances.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Leave Type *</Text>
          <View style={styles.select}>
            <Text style={styles.placeholder}>Select Leave Type</Text>
            <ChevronDown color="#69707d" size={22} />
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.field, styles.rowField]}>
            <Text style={styles.label}>From Date *</Text>
            <View style={styles.dateInput}>
              <CalendarDays color="#69707d" size={22} />
              <Text style={styles.dateText}>Select Date</Text>
            </View>
          </View>

          <View style={[styles.field, styles.rowField]}>
            <Text style={styles.label}>To Date *</Text>
            <View style={styles.dateInput}>
              <CalendarDays color="#69707d" size={22} />
              <Text style={styles.dateText}>Select Date</Text>
            </View>
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Duration</Text>
          <View style={styles.durationInput}>
            <Text style={styles.dateText}>0 Days</Text>
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Reason *</Text>
          <TextInput
            placeholder="Enter reason for leave..."
            placeholderTextColor="#69707d"
            multiline
            style={styles.reason}
            textAlignVertical="top"
          />
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.86} onPress={() => navigation.replace("Auth")}>
          <Text style={styles.buttonText}>Submit Leave</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2cc4f1",
  },
  header: {
    height: 84,
    backgroundColor: "#31b3ef",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  backButton: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "800",
  },
  headerSpacer: {
    width: 44,
  },
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 36,
    paddingBottom: 34,
  },
  sectionTitle: {
    color: "#111827",
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 12,
  },
  balanceCard: {
    minHeight: 92,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e6e8ee",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  balanceItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  balanceValue: {
    fontSize: 24,
    fontWeight: "800",
  },
  balanceLabel: {
    color: "#4a4f5b",
    fontSize: 14,
    marginTop: 8,
  },
  divider: {
    position: "absolute",
    right: 0,
    top: 25,
    width: 1,
    height: 44,
    backgroundColor: "#e2e4ea",
  },
  field: {
    marginBottom: 24,
  },
  label: {
    color: "#111827",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
  },
  select: {
    minHeight: 62,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#cfd3dc",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  placeholder: {
    color: "#69707d",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    gap: 18,
  },
  rowField: {
    flex: 1,
  },
  dateInput: {
    minHeight: 62,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#cfd3dc",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  durationInput: {
    minHeight: 56,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#cfd3dc",
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  dateText: {
    color: "#111827",
    fontSize: 16,
    marginLeft: 14,
  },
  reason: {
    minHeight: 136,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#cfd3dc",
    padding: 16,
    color: "#111827",
    fontSize: 16,
  },
  button: {
    minHeight: 68,
    backgroundColor: "#3199ef",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "800",
  },
});

export default ApplyLeaveScreen;
