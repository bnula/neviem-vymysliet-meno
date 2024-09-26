"use client";

import { addVocabularyWord, fetchVocabulary } from "@/app/data/crud-operations";
import { VocabularyEntry } from "@/app/utils/types/vocabulary-entry";
import { useState, useEffect } from "react";

export default function Page() {
    const [words, setWords] = useState<VocabularyEntry[]>([]);
    const [english, setEnglish] = useState<string>("");
    const [czech, setCzech] = useState<string>("");

    useEffect(() => {
        const getWords = async () => {
        const fetchedWords = await fetchVocabulary();
        setWords(fetchedWords);
        };

        getWords();
    }, []); // Empty dependency array to prevent infinite loop

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevents form from reloading the page

        if (!english || !czech) {
        alert("Please fill in both fields.");
        return;
        }

        const newWord: VocabularyEntry = {
        english,
        czech,
        };

        try {
        await addVocabularyWord(newWord);
        setWords((prevWords) => [...prevWords, newWord]); // Add the new word to the state
        setEnglish(""); // Clear the input fields
        setCzech("");
        } catch (error) {
        console.error("Failed to add word:", error);
        }
    };

    const handleOpenDeepL = () => {
        const deeplUrl = `https://www.deepl.com/translator#en/cs/${english}`;
        window.open(deeplUrl, "_blank"); // Opens DeepL in a new tab with the English word prefilled
    };

    return (
        <div className="max-w-2xl mx-auto p-8 bg-slate-700 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-teal-600 mb-6">Translation Form</h1>
            <form className="grid grid-cols-1 gap-6 sm:grid-cols-6 pb-6" onSubmit={handleSave}>
                <div className="col-span-3">
                    <label htmlFor="english" className="block text-sm font-medium text-gray-200">
                        English
                    </label>
                    <input
                        id="english"
                        name="english"
                        type="text"
                        value={english}
                        onChange={(e) => setEnglish(e.target.value)}
                        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-teal-600 focus:border-teal-600 text-black"
                    />
                </div>

                <div className="col-span-3">
                    <label htmlFor="czech" className="block text-sm font-medium text-gray-200">
                        Czech
                    </label>
                    <input
                        id="czech"
                        name="czech"
                        type="text"
                        value={czech}
                        onChange={(e) => setCzech(e.target.value)}
                        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-teal-600 focus:border-teal-600 text-black"
                    />
                </div>

                <div className="col-span-6 flex justify-between mt-4">
                    <button
                        type="submit"
                        className="w-1/2 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-500 transition-colors shadow-md mr-2"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={handleOpenDeepL}
                        className="w-1/2 bg-slate-200 text-teal-600 py-2 px-4 rounded-lg border border-teal-600 hover:bg-teal-600 hover:text-white transition-colors shadow-md"
                    >
                        Translate in DeepL
                    </button>
                </div>
            </form>

            <div className="mt-8">
                <table className="table-auto w-full text-left border border-slate-500">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border border-slate-200 text-teal-600">English</th>
                            <th className="px-4 py-2 border border-slate-200 text-teal-600">Czech</th>
                        </tr>
                    </thead>
                    <tbody>
                        {words?.map((item, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 border border-slate-200">{item.english}</td>
                                <td className="px-4 py-2 border border-slate-200">{item.czech}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
