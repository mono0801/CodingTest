class Solution {
    public int solution(int[] players, int m, int k) {
        int answer = 0;
        
        for (int i = 0; i < 24; i++) {
            int server = players[i] / m;
            
            if (server > 0) {
                for (int j = i; j < i + k; j++) {
                    if (j >= 24) break;
                    players[j] -= server * m;
                }
                answer += server;
            }
        }
        return answer;
    }
}