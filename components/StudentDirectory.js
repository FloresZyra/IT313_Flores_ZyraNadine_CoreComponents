import React,  {useState} from 'react';
import {View, Text, TextInput, ScrollView, StyleSheet} from 'react-native';
import StudentCard from './StudentCard';

const students = [
  { id: "s1", name: "Ana Cruz", year: "3rd Year", photoUrl: "https://i.pravatar.cc/100?img=1" },
  { id: "s2", name: "Bea Santos", year: "2nd Year", photoUrl: "https://i.pravatar.cc/100?img=2" },
  { id: "s3", name: "Cid Ramos", year: "4th Year", photoUrl: "https://i.pravatar.cc/100?img=3" },
  { id: "s4", name: "Dex Alonzo", year: "1st Year", photoUrl: "https://i.pravatar.cc/100?img=4" },
  { id: "s5", name: "Eli Tan", year: "3rd Year", photoUrl: "https://i.pravatar.cc/100?img=5" },
];

export default function StudentDirectory() {
    const [studentList, setStudentList] = useState(students);
    const [query, setQuery] = useState('');

    const handleToggleFlag = (studentId) => {
        setStudentList((prev) =>prev.map((student) => student.id === studentId ? { ...student, flagged: !student.flagged} : student)
        );
    };


    const filteredStudents = studentList.filter((student)=>
        student.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Student Directory</Text>
                <Text style={styles.headerSubtitle}>{studentList.length} students this term</Text>

            </View>

            <View style={styles.searchWrapper}>
                <TextInput
                style={styles.searchInput}
                placeholder='🔍 Search students...'
                placeholderTextColor= "#f472b6"
                value={query}
                onChangeText={setQuery}
                autoCapitalize='none'
                autoCorrect={false}
                />
            </View>

            <ScrollView contentContainerStyle={styles.scrollList} showsVerticalScrollIndicator={false}>
                {filteredStudents.length > 0 ? (
                    filteredStudents.map((student) => (
                        <StudentCard
                        key={student.id}
                        id={student.id}
                        name={student.name}
                        year={student.year}
                        photoUrl={student.photoUrl}
                        flagged={student.flagged}
                        onToggleFlag={handleToggleFlag}
                        />
                    ))
                ) : (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No students found matching "{query}"</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundOClor: '#fff5f7',
    },
    header: {
        backgroundColor: '#db2777',
        paddingTop: 54,
        paddingBottom: 24,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,

    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '800',
        color: '#ffffff',

    },
    headerSubtitle: {
        fontSize: 14,
        color: '#fce7f3',
        marginTop: 4,
        
    },
    searchWrapper: {
        paddingHorizontal: 16,
        marginTop: -16,
        marginBottom: 8,

    },
    searchInput: {
        backgroundColor: '#ffffff',
        height: 48,
        paddingHorizontal: 16,
        borderRadius: 14,
        fontSize: 15,
        color: '#831843',
        borderWidth: 1.5,
        borderColor: '#fbcfe8',
        shadowColor: '#ec4899',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 5,
        elevation: 2,
    },
    scrollList: {
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 40,

    },
    emptyContainer: {
        alignItems: 'center',
        marginTop: 40,
    },
    emptyText: {
        color: '#f472b6',
        fontSize: 15,
    },
});
