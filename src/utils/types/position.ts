import { LevelLink } from "./level-selection-props";

export type Position = {
    description: string,
    link: LevelLink
}

const positions: Position[] = [
    {
        description: "Toto je ta full remote co sme sa bavili na zaciatku",
        link: {
            text: "Veeam",
            url: "https://boards.eu.greenhouse.io/veeamsoftware/jobs/4258385101?gh_src=f754f242teu&source=LinkedIn"
        }
    },
    {
        description: "Malo by to byt mozne aj full remote",
        link: {
            text: "MageXo",
            url: "https://www.startupjobs.cz/nabidka/42335/akcni-qa-tester-velkych-e-shopu"
        }
    },
    {
        description: "3 dni HO, asi by sa dalo dohodnut aj na 4, my mame tiez ofiko 3",
        link: {
            text: "Ceska Sporka",
            url: "https://csas.jobs.cz/detail-pozice?r=detail&id=2000296866&rps=233&impressionId=e570aa06-5f7b-442a-bf17-c020b383b94d"
        }
    },
    {
        description: "Maju remote, opytas sa na pohovore ked tak",
        link: {
            text: "Fio Banka",
            url: "https://fio.jobs.cz/detail-pozice?r=detail&id=2000293577&rps=233&impressionId=c0f35026-3c15-4476-921d-c699ef7e9ec5"
        }
    },
    {
        description: "Tito davaju aj prispevok na HO, tam by to malo byt uplne ok",
        link: {
            text: "ABB",
            url: "https://abb.jobs.cz/?r=detail&id=2000295834&rps=233&impressionId=e570aa06-5f7b-442a-bf17-c020b383b94d"
        }
    },
    {
        description: "HO na zaklade domluvy, to vykecas",
        link: {
            text: "KB",
            url: "https://kb.jobs.cz/detail-pozice?r=detail&id=2000284971&rps=233&impressionId=28424e14-8f63-42e4-a879-51b64c9bfae1"
        }
    },
    {
        description: "remote podla dohody, to uhras na 1 den v kancli :D",
        link: {
            text: "Jobs Contact Personal, s.r.o.",
            url: "https://www.jobs.cz/rpd/2000300468/?searchId=2233456e-7811-4879-a6f0-1ed455c6e297&rps=233"
        }
    },
    {
        description: "ponukaju shitload of money a tiez HO, to zistis na pohovore",
        link: {
            text: "agnostix",
            url: "https://agnostix.jobs.cz/detail-pozice?r=detail&id=2000092531&rps=233&impressionId=c0f35026-3c15-4476-921d-c699ef7e9ec5"
        }
    }, 
    {
        description: "toto vyzera byt, ze to je aj full remote",
        link: {
            text: "Dertour Group",
            url: "https://dertouristik.jobs.cz/detail-pozice?r=detail&id=2000295250&rps=233&impressionId=11cb9a39-bfcd-4736-a3c9-f8a5ac8ac09b"
        }
    },
    {
        description: "toto vyzera byt, ze to je aj full remote",
        link: {
            text: "denik.cz",
            url: "https://www.startupjobs.cz/nabidka/74689/tester-ka-webovych-aplikaci"
        }
    },
    {
        description: "toto vyzera byt, ze to je aj full remote",
        link: {
            text: "Sinfin",
            url: "https://www.startupjobs.cz/nabidka/44336/testovani-a-podpora-webovych-aplikaci"
        }
    },
    {
        description: "full remote a neobmedzena dovolenka",
        link: {
            text: "Seyfor",
            url: "https://career.seyfor.com/cs-cz/testerka-pro-finskou-celni-spravu-2"
        }
    }
]

export default positions;