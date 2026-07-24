---
title: "Top Java Coding Interview Questions for Senior Developers"
categories: [ Interview ]
tags: [Java, Coding, Interview]
description: "A curated list of the most important Java coding hands-on interview questions for experienced developers, with business use cases from the healthcare insurance domain."
date: 2023-08-22T08:00:00+05:30
images: ["images/2026/07/java-coding-questions.webp"]
author: ahmad
---



## Hands-On Java Coding Questions

### Q1: Reverse a String (Warm-up)

**Business Use Case:** "As a simple warm-up, imagine you need to reverse a member's ID for a legacy system's hashing algorithm. How would you write a function to do this?"

**Answer:**

```java
public class StringReverser {
    public static String reverseString(String str) {
        if (str == null || str.isEmpty()) {
            return str;
        }
        
        // Use StringBuilder for efficient string manipulation
        StringBuilder reversed = new StringBuilder(str.length());
        
        // Loop from the end of the string to the beginning
        for (int i = str.length() - 1; i >= 0; i--) {
            reversed.append(str.charAt(i));
        }
        
        return reversed.toString();
    }
}
```

### Q2: Check if a String is a Palindrome

**Problem:** Write a method to check if a given string is a palindrome (reads the same forwards and backwards), ignoring case and non-alphanumeric characters.

**Answer:**

```java
public class PalindromeChecker {
    public static boolean isPalindrome(String str) {
        if (str == null) {
            return false;
        }
        
        // 1. Sanitize the string: remove non-alphanumeric chars and convert to lower case.
        String sanitized = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        
        // 2. Use two pointers to check for palindrome property.
        int left = 0;
        int right = sanitized.length() - 1;
        
        while (left < right) {
            if (sanitized.charAt(left) != sanitized.charAt(right)) {
                return false; // Characters don't match
            }
            left++;
            right--;
        }
        
        return true; // All characters matched
    }
}
```

### Q3: Find the Second Largest Number in an Array

**Problem:** Write a method to find the second largest number in an integer array.

**Answer:**

```java
public class SecondLargestFinder {
    public static int findSecondLargest(int[] arr) {
        if (arr == null || arr.length < 2) {
            throw new IllegalArgumentException("Array must contain at least two elements.");
        }
        
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;
        
        for (int number : arr) {
            if (number > largest) {
                secondLargest = largest;
                largest = number;
            } else if (number > secondLargest && number != largest) {
                secondLargest = number;
            }
        }
        
        return secondLargest;
    }
}
```

### Q4: Find Duplicate Characters in a String

**Problem:** Write a method to find and print all duplicate characters in a given string.

**Answer:**

```java
import java.util.HashMap;
import java.util.Map;

public class DuplicateCharacterFinder {
    public static void findDuplicates(String str) {
        if (str == null || str.isEmpty()) {
            System.out.println("String is empty or null.");
            return;
        }

        Map<Character, Integer> charCountMap = new HashMap<>();

        // Count occurrences of each character
        for (char c : str.toCharArray()) {
            charCountMap.put(c, charCountMap.getOrDefault(c, 0) + 1);
        }

        System.out.println("Duplicate characters in '" + str + "':");
        // Print characters that appear more than once
        for (Map.Entry<Character, Integer> entry : charCountMap.entrySet()) {
            if (entry.getValue() > 1) {
                System.out.println(entry.getKey() + ": " + entry.getValue() + " times");
            }
        }
    }
}
```

### Q5: Check if Two Strings are Anagrams

**Problem:** Write a method to determine if two strings are anagrams of each other. Anagrams are words or phrases formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Answer:**

```java
import java.util.Arrays;

public class AnagramChecker {
    public static boolean areAnagrams(String str1, String str2) {
        // Sanitize strings: remove whitespace and convert to lower case
        String sanitized1 = str1.replaceAll("\\s", "").toLowerCase();
        String sanitized2 = str2.replaceAll("\\s", "").toLowerCase();

        if (sanitized1.length() != sanitized2.length()) {
            return false;
        }

        // Convert strings to char arrays and sort them
        char[] charArray1 = sanitized1.toCharArray();
        char[] charArray2 = sanitized2.toCharArray();
        Arrays.sort(charArray1);
        Arrays.sort(charArray2);

        // Compare the sorted arrays
        return Arrays.equals(charArray1, charArray2);
    }
}
```

### Q6: Find Duplicate Elements in a List using Java 8 Streams

**Problem:** Given a list of integers, find all the duplicate elements using the Java 8 Stream API.

**Answer:**

```java
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class StreamDuplicateFinder {
    public static Set<Integer> findDuplicates(List<Integer> list) {
        Set<Integer> seen = new HashSet<>();
        // Filter for elements that cannot be added to the 'seen' set.
        // The add() method of a Set returns false if the element is already present.
        return list.stream()
                   .filter(n -> !seen.add(n))
                   .collect(Collectors.toSet());
    }
}
```

### Q7: FizzBuzz

**Problem:** Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

**Answer:**

```java
public class FizzBuzz {
    public static void printFizzBuzz(int n) {
        for (int i = 1; i <= n; i++) {
            if (i % 15 == 0) { // or (i % 3 == 0 && i % 5 == 0)
                System.out.println("FizzBuzz");
            } else if (i % 3 == 0) {
                System.out.println("Fizz");
            } else if (i % 5 == 0) {
                System.out.println("Buzz");
            } else {
                System.out.println(i);
            }
        }
    }

    public static void main(String[] args) {
        printFizzBuzz(100);
    }
}
```

### Q8: Two Sum

**Problem:** Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.

**Answer:**

```java
import java.util.HashMap;
import java.util.Map;

public class TwoSum {
    public static int[] findTwoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (numMap.containsKey(complement)) {
                // Found the pair
                return new int[] { numMap.get(complement), i };
            }
            // Add the current number and its index to the map
            numMap.put(nums[i], i);
        }
        
        // No solution found
        throw new IllegalArgumentException("No two sum solution");
    }
}
```

### Q9: Group Anagrams

**Problem:** Given an array of strings, group the anagrams together. You can return the answer in any order.

**Answer:**

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GroupAnagrams {
    public static List<List<String>> group(String[] strs) {
        if (strs == null || strs.length == 0) {
            return new ArrayList<>();
        }
        
        Map<String, List<String>> map = new HashMap<>();
        for (String s : strs) {
            char[] charArray = s.toCharArray();
            Arrays.sort(charArray);
            String sortedKey = String.valueOf(charArray);
            
            map.computeIfAbsent(sortedKey, k -> new ArrayList<>()).add(s);
        }
        
        return new ArrayList<>(map.values());
    }
}
```

### Q10: Fibonacci Sequence

**Problem:** Write a method to generate the nth number in the Fibonacci sequence. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.

**Answer:**

```java
public class Fibonacci {
    // Iterative solution is more efficient than recursive for this problem
    public static int fib(int n) {
        if (n <= 1) {
            return n;
        }
        
        int a = 0, b = 1;
        
        for (int i = 2; i <= n; i++) {
            int sum = a + b;
            a = b;
            b = sum;
        }
        
        return b;
    }
}
```

### Q11: Maximum Subarray Sum

**Problem:** Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. (This is a classic problem solved efficiently by Kadane's algorithm).

**Answer:**

```java
public class MaxSubarraySum {
    public static int maxSubArray(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }
        
        int maxSoFar = nums[0];
        int maxEndingHere = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        
        return maxSoFar;
    }
}
```

### Q12: Check if a Number is Prime

**Problem:** Write a method to check if a given integer is a prime number.

**Answer:**

```java
public class PrimeChecker {
    public static boolean isPrime(int n) {
        // Prime numbers are greater than 1
        if (n <= 1) {
            return false;
        }
        // 2 is the only even prime number
        if (n == 2) {
            return true;
        }
        // All other even numbers are not prime
        if (n % 2 == 0) {
            return false;
        }
        
        // Check for odd factors from 3 up to the square root of n
        for (int i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                return false;
            }
        }
        
        return true;
    }
}
```

### Q13: Find the First Non-Repeating Character in a String

**Problem:** Write a method to find the first character in a string that does not repeat. For example, in the string "swiss", the first non-repeating character is 'w'.

**Answer:**

A simple and easy-to-remember approach is to make two passes through the string. The first pass counts the occurrences of each character, and the second pass finds the first character with a count of one. A `LinkedHashMap` is perfect for this because it maintains the insertion order of the characters.

```java
import java.util.LinkedHashMap;
import java.util.Map;

public class FirstNonRepeatingFinder {

    /**
     * Finds the first non-repeating character in a string using a two-pass approach.
     * The logic is easy to remember: 1. Count frequencies, 2. Find the first with count 1.
     *
     * @param str The input string.
     * @return The first non-repeating character, or null if none is found.
     */
    public static Character findFirstNonRepeatingChar(String str) {
        if (str == null || str.isEmpty()) {
            return null;
        }

        // Step 1: Count character frequencies while preserving insertion order.
        // A LinkedHashMap is perfect because it maintains the order of keys.
        Map<Character, Integer> charCounts = new LinkedHashMap<>();
        for (char c : str.toCharArray()) {
            charCounts.put(c, charCounts.getOrDefault(c, 0) + 1);
        }

        // Step 2: Find the first entry in the map with a count of 1.
        // Because we used a LinkedHashMap, the first one we find is the answer.
        for (Map.Entry<Character, Integer> entry : charCounts.entrySet()) {
            if (entry.getValue() == 1) {
                return entry.getKey(); // Found it!
            }
        }

        // If no non-repeating character is found, return null.
        return null;
    }
}
```

### Q14: Find the Highest and Second Highest Number in an Array

**Problem:** Write a method to find the highest and second highest number in an integer array without sorting it.

**Answer:**

The most efficient way to solve this is to iterate through the array just once. We can maintain two variables, `largest` and `secondLargest`, and update them as we scan the array. This single-pass approach has a time complexity of O(n).

```java
import java.util.Arrays;

public class SecondLargestFinder {

    /**
     * Finds the largest and second largest numbers in an array in a single pass.
     * @param arr The input integer array.
     */
    public static void findHighestAndSecondHighest(int[] arr) {
        if (arr == null || arr.length < 2) {
            System.out.println("Array must contain at least two elements to find a second highest number.");
            return;
        }

        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        for (int number : arr) {
            if (number > largest) {
                secondLargest = largest; // Old largest becomes second largest
                largest = number;        // New number is the new largest
            } else if (number > secondLargest && number != largest) {
                secondLargest = number; // New number is the new second largest
            }
        }

        System.out.println("Input Array: " + Arrays.toString(arr));
        System.out.println("Highest number: " + largest);
        System.out.println("Second highest number: " + secondLargest);
    }
}
```

### Q15: Remove Duplicate Elements from an Array

**Problem:** Write a method to remove duplicate elements from an integer array. The solution should preserve the original order of the elements.

**Answer:**

The most straightforward and idiomatic way to remove duplicates while preserving order is to use a `LinkedHashSet`. A `LinkedHashSet` is a `Set` that maintains the insertion order of elements. A more modern approach uses the Java 8 Stream API.

Using `LinkedHashSet` (Classic Approach)

This approach is easy to remember: convert the array to a `LinkedHashSet` to automatically remove duplicates, then convert it back to an array.

```java
import java.util.Arrays;
import java.util.LinkedHashSet;

public class DuplicateRemover {

    /**
     * Removes duplicates from an array using a LinkedHashSet to preserve order.
     * @param arr The input array with potential duplicates.
     * @return A new array with unique elements in their original order.
     */
    public static int[] removeDuplicates(int[] arr) {
        if (arr == null || arr.length == 0) {
            return arr;
        }

        // 1. Use LinkedHashSet to store unique elements in insertion order.
        LinkedHashSet<Integer> set = new LinkedHashSet<>();
        for (int number : arr) {
            set.add(number);
        }

        // 2. Convert the set back to an array.
        int[] result = new int[set.size()];
        int i = 0;
        for (int number : set) {
            result[i++] = number;
        }

        return result;
    }

    // A more concise way using Java 8 Streams
    public static int[] removeDuplicatesWithStream(int[] arr) {
        return Arrays.stream(arr).distinct().toArray();
    }
}
```