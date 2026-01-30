"use client"

import type { HTMLChakraProps, RecipeProps } from "@chakra-ui/react"
import { createRecipeContext } from "@chakra-ui/react"
import NextLink from "next/link"

export interface LinkProps
  extends HTMLChakraProps<typeof NextLink, RecipeProps<"link">> { }

const { withContext } = createRecipeContext({ key: "link" })

export const Link = withContext<HTMLAnchorElement, LinkProps>(NextLink)
