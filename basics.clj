Literals

  Numeric
    42        ; integer
    -1.5      ; floating point
    22/7      ; ratio

  Character types
    "hello"         ; string
    \e              ; character
    #"[a-z]+"       ; regular expression

  Symbol
    map             ; symbol
    +               ; symbol - most punctuation allowed
    clojure.core/+  ; namespaced symbol
    nil             ; null value
    true false      ; booleans
    :alpha          ; keyword
    :release/alpha  ; keyword with namespace

  Collections
    '(1 2 3)     ; list
    [1 2 3]      ; vector
    #{1 2 3}     ; set
    {:a 1, :b 2} ; map


Evaluation
  (+ 3 4)
  ; () list
  ; + symbol evaluates to a function
  ; 3 4 numbers evaluate to themselves and are the arguments

Basics
  (def x 7)
  (println "What is this:" (+ 1 2))
  (defn square [num] (* num num))
  (map square [1 2 3])