import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { ScrollView, View, Text } from "react-native";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";
import { ProgressBar } from "../components/ProgressBar";

interface HabitParams {
  date: string;
}

export function Habit() {
  const route = useRoute()
  const { date } = route.params as HabitParams;

  const parsedDate = dayjs(date)
  const dayOfWeek = parsedDate.format('dddd')
  const dayAndMount = parsedDate.format('DD/MM')

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>

        <Text className="text-white font-extrabold text-3xl">
          {dayAndMount}
        </Text>

        <ProgressBar progress={75} />

        <View className="mt-6">
          <Checkbox 
            title="Beber 2L de água"
            checked={true}
          />
          <Checkbox 
            title="Acordar 6H"
            checked={false}
          />
          <Checkbox 
            title="Ir treinar"
            checked={false}
          />
          <Checkbox 
            title="Fazer a NLW Setup"
            checked={true}
          />
          <Checkbox 
            title="Ler 10 páginas de um livro"
            checked={true}
          />
        </View>
      </ScrollView>
    </View>
  )
}