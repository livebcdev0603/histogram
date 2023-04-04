"use client"

import React, { PropsWithChildren } from "react"
import Link from "next/link"
import { redirect, useSelectedLayoutSegments } from "next/navigation"
import { db } from "@/prisma/db"
import {
  CreditCard,
  Key,
  Keyboard,
  LogOut,
  Mail,
  MessageSquare,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"
import { signOut } from "next-auth/react"

import { getSession } from "@/lib/auth"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

type Props = {
  team: {
    slug: string
  }
  user: {
    id: string
    name: string
    image: string | null
  }
}

export const Navbar: React.FC<PropsWithChildren<Props>> = ({ user, team }) => {
  const segments = useSelectedLayoutSegments()
  return (
    <div className="flex justify-between items-center">
      <ul role="list" className="flex items-center">
        {/* 

                {segments?.map((s, i) => (
                    <li key={s} className="flex items-center ">
                        <span className="px-2 text-zinc-400">/</span>
                        <Link
                            href={`/${segments.filter((_, j) => j <= i).join("/")}`}
                            className="px-2 text-sm font-medium text-zinc-500 hover:text-zinc-700"
                        >
                            {s}
                        </Link>
                    </li>
                ))} */}
      </ul>
      <div className="flex items-center justify-between">
        <div className="ml-auto mr-4">
          <h3 className="text-sm font-semibold">{user.name}</h3>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar>
                {user.image ? (
                  <AvatarImage src={user.image} alt={user.name} />
                ) : null}
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {/* <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <CreditCard className="mr-2 h-4 w-4" />
                                <span>Billing</span>
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </DropdownMenuItem> */}
              <Link href={`/${team.slug}/keys`}>
                <DropdownMenuItem>
                  <Key className="mr-2 h-4 w-4" />
                  <span>API Keys</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            {/* <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <Users className="mr-2 h-4 w-4" />
                                <span>Team</span>
                            </DropdownMenuItem>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <UserPlus className="mr-2 h-4 w-4" />
                                    <span>Invite users</span>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent forceMount>
                                        <DropdownMenuItem>
                                            <Mail className="mr-2 h-4 w-4" />
                                            <span>Email</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <MessageSquare className="mr-2 h-4 w-4" />
                                            <span>Message</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <PlusCircle className="mr-2 h-4 w-4" />
                                            <span>More...</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                        </DropdownMenuGroup> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <button onClick={() => signOut()}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign out</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
