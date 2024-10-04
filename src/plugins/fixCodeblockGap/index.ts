/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import {Devs} from '@utils/constants'
import definePlugin from '@utils/types'
export default definePlugin({
     name: 'FixCodeblockGap',
     description: 'Removes the gap between codeblocks and text below it',
     authors: [Devs.Grzesiek11],
     patches: [
          {
               find: String.raw`/^${'```'}(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*${'```'}`,
               replacement: {
                    match: String.raw`/^${'```'}(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*${'```'}`,
                    replace: '$&\\n?',
               },
          },
     ],
})