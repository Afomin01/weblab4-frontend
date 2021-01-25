# weblab4-frontend
Web programming lab 4 frontend made at ITMO University by Artem Bakin and Dmitry Kupershtein.

| Welcome page | Main page |
| ------------ | ----------|
|![Welcome page](https://user-images.githubusercontent.com/38016689/105635113-5f1dc000-5e72-11eb-9462-7fb049ebce46.png)|![Main page](https://user-images.githubusercontent.com/38016689/105636379-39e08000-5e79-11eb-9659-450b290a7485.png)|

## Task
Develop a frontend on React + Redux stack for backend RESP API.

| Var | Type | Valid values                                     | Input         |
| --- | ---- | ------------------------------------------------ | ------------- |
| X   |float |{'-2','-1.5','-1','-0.5','0','0.5','1','1.5','2'} | Radio         |
| Y   |float |(-5,5)                                            | Text          |
| R   |float | {'-2','-1.5','-1','-0.5','0','0.5','1','1.5','2'}| Radio         |

## Components structure
```
weblab4-frontend
├──Header
├──Footer
├── WelcomePage
│   └── authorizationForm
│       ├── SignInForm
│       └── SignUpForm
└── MainPage
    ├── UserModule
    ├── Graph
    ├── PointsInputForm
    └── MainPageEntryTable
        └──EntryTableRow
```

## Redux store
| Variable    | Desc                            | 
| ----------- | ------------------------------- |
| entries     | array of user's entries         |
| r           | the current selected radius     |

## Redux actions
| Action        | Desc                            |
| ------------- | ------------------------------- |
| SET_ENTRIES   | Set array of entries            |
| ADD_ENTRY     | Add new entry to array          |
| SET_R         | Set current radius              |
| CLEAR_ENTRIES | Clear array of entries          | 