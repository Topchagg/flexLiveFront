I`m using light version of FSD best practice u can read more info about layers and how it`s works here 
-> https://feature-sliced.design/docs/get-started/overview
Of course I left about this structure commentaries, but If u something don`t get please, read this documentation

page components can use only -> Sections (Have some exceptions, better import something from lib that making logic much harder in some of section)
section components can use -> everything except of pages
entetie components can use only -> shared,lib
shared components can use -> nothing

Please, do not forget reading this  -> https://feature-sliced.design/docs/get-started/overview

p.s Light because I dropped layer "Feature" I`m writing features in components for example.
U can see this in Sections/QuestionForm/QuestionForm.tsx (This is just a section file)
feature components we replace by Sections/QuestionForm/ui/form.tsx
I named like this because CreateAccountForm or QuestionForm will have form and it`s 
hard to make form reusable of course u can do it, but logic will be too hard

Better a bit lose in reusable than in understanding of code!!!