import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:portfolio_flutter/blocs/portfolio_bloc.dart';
import 'package:portfolio_flutter/repositories/portfolio_repository.dart';
import 'package:portfolio_flutter/screens/home_screen.dart';

void main() {
  runApp(const PortfolioApp());
}

class PortfolioApp extends StatelessWidget {
  const PortfolioApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider<PortfolioBloc>(
          create: (context) => PortfolioBloc(
            PortfolioRepositoryImpl(),
          )..add(LoadPortfolioData()),
        ),
      ],
      child: MaterialApp(
        title: 'Abdul Quadir - Portfolio',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          primarySwatch: Colors.blue,
          primaryColor: const Color(0xFF2563EB),
          scaffoldBackgroundColor: const Color(0xFFFAFAFA),
          useMaterial3: true,
        ),
        home: const HomeScreen(),
      ),
    );
  }
}
