import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  BadgePlus,
  Bell,
  CalendarDays,
  ChevronRight,
  Clock3,
  FileText,
  Menu,
  Stethoscope,
  Umbrella,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Profile from "../assets/user.webp";

const leaveBalances = [
  {
    label: "Annual Leave",
    value: "18",
    color: "#f0ecff",
    iconColor: "#4f31ef",
    icon: CalendarDays,
  },
  {
    label: "Casual Leave",
    value: "12",
    color: "#edf9f3",
    iconColor: "#16a05b",
    icon: Umbrella,
  },
  {
    label: "Sick Leave",
    value: "08",
    color: "#fff3e8",
    iconColor: "#f57c00",
    icon: Stethoscope,
  },
];

const quickActions = [
  { label: "Apply Leave", icon: BadgePlus, color: "#7250e8", route: "ApplyLeave" },
  { label: "My Leaves", icon: FileText, color: "#1f83dc" },
  { label: "Pending", icon: Clock3, color: "#ff9000" },
  { label: "Calendar", icon: CalendarDays, color: "#20a757" },
];

const pendingRequests = [
  {
    initials: "RK",
    name: "Ravi Kumar",
    detail: "Casual Leave • 2 Days",
    date: "May 20 - May 21, 2024",
    color: "#c8b6f5",
  },
  {
    initials: "AS",
    name: "Anitha S",
    detail: "Annual Leave • 5 Days",
    date: "May 18 - May 22, 2024",
    color: "#bfe8cf",
  },
  {
    initials: "MK",
    name: "Manikandan",
    detail: "Sick Leave • 1 Day",
    date: "May 17, 2024",
    color: "#b9dcff",
  },
];

export default function DashboardScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <View style={styles.topBar}>
          <Menu color="#ffffff" size={27} />
          <View>
            <Bell color="#ffffff" size={25} />
            <View style={styles.notifyDot} />
          </View>
        </View>

        <View style={styles.profileRow}>
          <Image source={Profile} style={styles.profile} />
          <View>
            <Text style={styles.name}>Hello, Aravind 👋</Text>
            <Text style={styles.text}>Have a nice day!</Text>
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.panel}
        contentContainerStyle={styles.panelContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>LEAVE BALANCE</Text>

        <View style={styles.balanceGrid}>
          {leaveBalances.map((item) => {
            const Icon = item.icon;

            return (
              <View
                key={item.label}
                style={[styles.balanceCard, { backgroundColor: item.color }]}
              >
                <Icon color={item.iconColor} size={28} />
                <Text style={styles.cardNum}>{item.value}</Text>
                <Text style={styles.cardText}>{item.label}</Text>
              </View>
            );
          })}
        </View>

        <Text style={styles.sectionTitle}>QUICK ACTIONS</Text>

        <View style={styles.actionGrid}>
          {quickActions.map((item) => {
            const Icon = item.icon;

            return (
              <TouchableOpacity
                key={item.label}
                style={styles.action}
                onPress={() => item.route && navigation.navigate(item.route)}
                activeOpacity={0.82}
              >
                <View style={[styles.actionIcon, { backgroundColor: item.color }]}>
                  <Icon color="#ffffff" size={24} />
                </View>
                <Text style={styles.actionText}>{item.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.requestHeader}>
          <Text style={styles.sectionTitle}>PENDING REQUESTS</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.requestsCard}>
          {pendingRequests.map((item, index) => (
            <View
              key={item.name}
              style={[
                styles.requestRow,
                index === pendingRequests.length - 1 && styles.lastRequestRow,
              ]}
            >
              <View style={[styles.avatar, { backgroundColor: item.color }]}>
                <Text style={styles.avatarText}>{item.initials}</Text>
              </View>
              <View style={styles.requestCopy}>
                <Text style={styles.requestName}>{item.name}</Text>
                <Text style={styles.requestDetail}>{item.detail}</Text>
                <Text style={styles.requestDate}>{item.date}</Text>
              </View>
              <View style={styles.statusPill}>
                <Text style={styles.statusText}>Pending</Text>
              </View>
              <ChevronRight color="#7b808c" size={22} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#318aef",
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 28,
    backgroundColor: "#3164ef",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  notifyDot: {
    position: "absolute",
    right: -3,
    top: -4,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#ff5a45",
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  profile: {
    width: 82,
    height: 82,
    borderRadius: 41,
    borderWidth: 3,
    borderColor: "#ffffff",
    marginRight: 18,
  },
  name: {
    fontSize: 21,
    fontWeight: "800",
    color: "#ffffff",
  },
  text: {
    fontSize: 15,
    color: "#ffffff",
    marginTop: 6,
  },
  panel: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  panelContent: {
    paddingHorizontal: 20,
    paddingTop: 26,
    paddingBottom: 26,
  },
  sectionTitle: {
    fontSize: 15,
    color: "#111827",
    fontWeight: "800",
    marginBottom: 14,
  },
  balanceGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 28,
  },
  balanceCard: {
    flex: 1,
    minHeight: 142,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(17,24,39,0.04)",
  },
  cardNum: {
    fontSize: 30,
    fontWeight: "800",
    color: "#111827",
    marginTop: 10,
  },
  cardText: {
    fontSize: 13,
    color: "#3e4350",
    textAlign: "center",
    marginTop: 4,
  },
  actionGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 28,
  },
  action: {
    flex: 1,
    minHeight: 94,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e8eaf1",
    backgroundColor: "#ffffff",
  },
  actionIcon: {
    width: 42,
    height: 42,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    color: "#3b404a",
    fontWeight: "600",
    textAlign: "center",
  },
  requestHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewAll: {
    color: "#23aae8",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 14,
  },
  requestsCard: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e9ebf1",
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },
  requestRow: {
    minHeight: 84,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eef0f5",
  },
  lastRequestRow: {
    borderBottomWidth: 0,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#31a9ef",
    fontSize: 16,
    fontWeight: "800",
  },
  requestCopy: {
    flex: 1,
  },
  requestName: {
    color: "#111827",
    fontSize: 15,
    fontWeight: "800",
  },
  requestDetail: {
    color: "#515765",
    fontSize: 13,
    marginTop: 3,
  },
  requestDate: {
    color: "#515765",
    fontSize: 13,
    marginTop: 3,
  },
  statusPill: {
    backgroundColor: "#fff1dd",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 8,
  },
  statusText: {
    color: "#ff8500",
    fontSize: 12,
    fontWeight: "700",
  },
});
