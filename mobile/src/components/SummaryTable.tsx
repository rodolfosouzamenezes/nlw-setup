import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";
import { api } from "../lib/axios";
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";

const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearStart = generateDatesFromYearBeginning()

const minimumSummaryDatesSize = 18 * 6.23;
const amountOfDaysToFill = minimumSummaryDatesSize - datesFromYearStart.length;

export function SummaryTable() {
  const [loading, setLoading] = useState(true)
  const [summary, setSummary] = useState(null)
  const { navigate } = useNavigation()

  const fetchData = async () => {
    try {
      setLoading(true)

      const response = await api.get('/summary')

      console.log(response.data)
      setSummary(response.data);
    } catch (error) {
      Alert.alert('Ops', 'Não foi possível carregar o sumário')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <View className="flex-1">
      <View className="flex-row mt-6 mb-2">
        {
          weekdays.map((weekday, index) => {
            return (
              <Text
                key={`${weekday}-${index}`}
                className='text-zinc-400 font-bold text-xl text-center m-1'
                style={{ width: DAY_SIZE }}
              >
                {weekday}
              </Text>
            )
          })
        }
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View className="flex-row flex-wrap">
          {
            datesFromYearStart.map((date) => {
              return (
                <HabitDay key={date.toISOString()} onPress={() => navigate('Habit', { date: date.toISOString() })} />
              )
            })
          }
          {
            amountOfDaysToFill > 0 && Array
              .from({ length: amountOfDaysToFill })
              .map((_, index) => (
                <View
                  key={index}
                  className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                  style={{ width: DAY_SIZE, height: DAY_SIZE }}
                />
              ))
          }
        </View>
      </ScrollView>
    </View>
  )
}